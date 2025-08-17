import { PrismaClient, Game, Room, User } from '../../generated/prisma';
import { isMoveForbidden } from './ruleService';
import { PlayerColor } from '@gomoku/common';

const prisma = new PrismaClient();

// --- Utility Functions ---

/**
 * Converts Prisma User models to player objects for game state.
 */
function getPlayersFromGame(game: Game & { blackPlayer: User; whitePlayer: User }) {
  return {
    black: { id: game.blackPlayer.id, nickname: game.blackPlayer.nickname || 'Player 1' },
    white: { id: game.whitePlayer.id, nickname: game.whitePlayer.nickname || 'Player 2' },
  };
}

/**
 * Checks for a line of a specific length for a given player.
 * @param requiredCount - 5 for a win, 6 for an overline.
 */
function checkLine(board: (PlayerColor | null)[][], row: number, col: number, requiredCount: number): boolean {
  const player = board[row][col];
  if (!player) return false;

  const directions = [
    { x: 1, y: 0 }, // Horizontal
    { x: 0, y: 1 }, // Vertical
    { x: 1, y: 1 }, // Diagonal \
    { x: 1, y: -1 }, // Diagonal /
  ];

  for (const dir of directions) {
    let count = 1;
    // Check in both positive and negative directions from the placed stone
    for (let i = 1; i < requiredCount; i++) {
      const r = row + dir.y * i;
      const c = col + dir.x * i;
      if (r >= 0 && r < 15 && c >= 0 && c < 15 && board[r][c] === player) {
        count++;
      } else {
        break;
      }
    }
    for (let i = 1; i < requiredCount; i++) {
      const r = row - dir.y * i;
      const c = col - dir.x * i;
      if (r >= 0 && r < 15 && c >= 0 && c < 15 && board[r][c] === player) {
        count++;
      } else {
        break;
      }
    }

    if (requiredCount === 6 && count > 5) return true; // Overline (more than 5)
    if (requiredCount === 5 && count === 5) return true; // Exact five for a win
  }

  return false;
}

// --- Room and Game Management ---

export async function getRooms() {
  return prisma.room.findMany({
    where: { status: 'WAITING' },
    include: { players: { select: { id: true, nickname: true } } },
  });
}

export async function createRoom(name: string, userId: string) {
  const room = await prisma.room.create({
    data: {
      name,
      players: {
        connect: { id: userId },
      },
    },
  });
  return room;
}

export async function joinRoom(roomId: string, userId: string) {
  const room = await prisma.room.findUnique({
    where: { id: roomId },
    include: { players: true },
  });

  if (!room) throw new Error('Room not found');
  if (room.players.length >= 2) throw new Error('Room is full');
  if (room.players.some((p) => p.id === userId)) {
    // Player is already in the room, just return the room state
    return getGame(roomId);
  }

  // Add the second player and create the game
  const updatedRoom = await prisma.room.update({
    where: { id: roomId },
    data: {
      players: {
        connect: { id: userId },
      },
      status: 'PLAYING',
    },
    include: { players: true },
  });

  const [blackPlayer, whitePlayer] = updatedRoom.players;

  const newGame = await prisma.game.create({
    data: {
      board: Array(15).fill(null).map(() => Array(15).fill(null)),
      currentPlayerId: blackPlayer.id,
      blackPlayerId: blackPlayer.id,
      whitePlayerId: whitePlayer.id,
      status: 'IN_PROGRESS',
      roomId: roomId,
    },
    include: { blackPlayer: true, whitePlayer: true, currentPlayer: true },
  });

  return newGame;
}

export async function getGame(roomId: string) {
  return prisma.game.findUnique({
    where: { roomId },
    include: { blackPlayer: true, whitePlayer: true, currentPlayer: true, room: { include: { players: true } } },
  });
}

// --- Core Game Logic ---

export async function makeMove(roomId: string, userId: string, row: number, col: number) {
  const game = await getGame(roomId);
  if (!game) throw new Error('Game not found');
  if (game.status === 'FINISHED') throw new Error('Game has already finished');
  if (game.currentPlayerId !== userId) throw new Error('Not your turn');

  const board = game.board as (PlayerColor | null)[][];
  if (board[row][col] !== null) throw new Error('Cell is already occupied');

  const playerColor: PlayerColor = game.blackPlayerId === userId ? 'black' : 'white';
  board[row][col] = playerColor;

  let winner: PlayerColor | null = null;
  let gameOverMessage = '';

  // --- Rule Checks ---
  if (playerColor === 'black') {
    if (checkLine(board, row, col, 6)) {
      winner = 'white';
      gameOverMessage = 'Black loses due to an overline.';
    } else if (await isMoveForbidden(board, row, col, playerColor)) {
      winner = 'white';
      gameOverMessage = 'Black loses due to a forbidden move.';
    }
  }

  // --- Win Check ---
  if (!winner && checkLine(board, row, col, 5)) {
    winner = playerColor;
    gameOverMessage = `${playerColor.charAt(0).toUpperCase() + playerColor.slice(1)} wins!`
  }

  // --- Update Game State in DB ---
  const nextPlayerId = playerColor === 'black' ? game.whitePlayerId : game.blackPlayerId;

  const updatedGame = await prisma.game.update({
    where: { id: game.id },
    data: {
      board,
      currentPlayerId: winner ? game.currentPlayerId : nextPlayerId, // Keep winner as current player on game end
      status: winner ? 'FINISHED' : 'IN_PROGRESS',
      winnerId: winner ? (winner === 'black' ? game.blackPlayerId : game.whitePlayerId) : null,
    },
    include: { blackPlayer: true, whitePlayer: true, currentPlayer: true, room: true },
  });

  // --- Save Final Result ---
  if (winner) {
    const winnerId = winner === 'black' ? game.blackPlayerId : game.whitePlayerId;
    const loserId = winner === 'black' ? game.whitePlayerId : game.blackPlayerId;
    const moveCount = board.flat().filter((c) => c).length;
    await saveGameResult(winnerId, loserId, game.blackPlayerId, game.whitePlayerId, moveCount, winner);

    await prisma.room.update({ where: { id: roomId }, data: { status: 'FINISHED' } });
  }

  return { ...updatedGame, gameOverMessage };
}

export async function handleDisconnect(userId: string) {
    const game = await prisma.game.findFirst({
        where: {
            status: 'IN_PROGRESS',
            OR: [
                { blackPlayerId: userId },
                { whitePlayerId: userId },
            ],
        },
        include: { room: true, blackPlayer: true, whitePlayer: true },
    });

    if (!game) return null; // No active game for this user

    const disconnectedPlayerColor: PlayerColor = game.blackPlayerId === userId ? 'black' : 'white';
    const winnerColor = disconnectedPlayerColor === 'black' ? 'white' : 'black';
    const winnerId = winnerColor === 'black' ? game.blackPlayerId : game.whitePlayerId;

    const updatedGame = await prisma.game.update({
        where: { id: game.id },
        data: {
            status: 'FINISHED',
            winnerId: winnerId,
        },
    });

    const moveCount = (game.board as (PlayerColor | null)[][]).flat().filter(c => c).length;
    await saveGameResult(winnerId, userId, game.blackPlayerId, game.whitePlayerId, moveCount, winnerColor);
    await prisma.room.update({ where: { id: game.roomId }, data: { status: 'FINISHED' } });

    return {
        roomId: game.roomId,
        winnerColor,
        disconnectedPlayerColor,
        message: `${disconnectedPlayerColor} has disconnected. ${winnerColor} wins by forfeit.`
    };
}


// --- Game Record Saving (already uses Prisma, can be kept as is) ---

async function saveGameResult(
  winnerId: string,
  loserId: string,
  blackPlayerId: string,
  whitePlayerId: string,
  moveCount: number,
  winnerColor: PlayerColor
) {
  try {
    await prisma.$transaction([
      prisma.gameRecord.create({
        data: {
          winnerId,
          loserId,
          blackPlayerId,
          whitePlayerId,
          moveCount,
          gameType: 'GOMOKU',
          endedAt: new Date(),
        },
      }),
      prisma.userStats.upsert({
        where: { userId_gameType: { userId: winnerId, gameType: 'GOMOKU' } },
        update: {
          wins: { increment: 1 },
          totalPlays: { increment: 1 },
          winsAsBlack: winnerColor === 'black' ? { increment: 1 } : undefined,
          winsAsWhite: winnerColor === 'white' ? { increment: 1 } : undefined,
        },
        create: {
          userId: winnerId,
          gameType: 'GOMOKU',
          wins: 1,
          losses: 0,
          totalPlays: 1,
          winsAsBlack: winnerColor === 'black' ? 1 : 0,
          winsAsWhite: winnerColor === 'white' ? 1 : 0,
        },
      }),
      prisma.userStats.upsert({
        where: { userId_gameType: { userId: loserId, gameType: 'GOMOKU' } },
        update: { losses: { increment: 1 }, totalPlays: { increment: 1 } },
        create: {
          userId: loserId,
          gameType: 'GOMOKU',
          wins: 0,
          losses: 1,
          totalPlays: 1,
        },
      }),
    ]);
    console.log(`Game result saved for winner: ${winnerId} and loser: ${loserId}`);
  } catch (error) {
    console.error('Error saving game result:', error);
  }
}

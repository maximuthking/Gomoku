import { PrismaClient } from '../../generated/prisma';

const prisma = new PrismaClient();

export interface Room {
  id: string;
  name: string;
}

export type PlayerColor = 'black' | 'white';

export interface GameState {
  board: (PlayerColor | null)[][];
  players: {
    black: { id: string; socketId: string } | null;
    white: { id: string; socketId: string } | null;
  };
  currentPlayer: PlayerColor;
  winner: PlayerColor | null;
}

// In-memory store for rooms and game states
export const rooms: Room[] = [];
export const gameStates = new Map<string, GameState>();

export function checkWin(board: (PlayerColor | null)[][], row: number, col: number): boolean {
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
    // Check in the positive direction
    for (let i = 1; i < 5; i++) {
      const newRow = row + dir.y * i;
      const newCol = col + dir.x * i;
      if (newRow >= 0 && newRow < 15 && newCol >= 0 && newCol < 15 && board[newRow][newCol] === player) {
        count++;
      } else {
        break;
      }
    }
    // Check in the negative direction
    for (let i = 1; i < 5; i++) {
      const newRow = row - dir.y * i;
      const newCol = col - dir.x * i;
      if (newRow >= 0 && newRow < 15 && newCol >= 0 && newCol < 15 && board[newRow][newCol] === player) {
        count++;
      } else {
        break;
      }
    }
    if (count >= 5) return true;
  }

  return false;
}

export async function saveGameResult(
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

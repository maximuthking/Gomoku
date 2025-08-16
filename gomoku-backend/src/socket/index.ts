import { Server, Socket } from 'socket.io';
import {
  rooms,
  gameStates,
  checkWin,
  checkOverline,
  saveGameResult,
  Room,
  GameState,
  PlayerColor,
} from '../services/gameService';
import { isMoveForbidden } from '../services/ruleService';

// Helper function to handle forfeits
function handleForfeit(io: Server, roomId: string, disconnectedPlayerColor: PlayerColor) {
  const gameState = gameStates.get(roomId);
  if (!gameState || gameState.winner) {
    return; // Game already over or does not exist
  }

  const winnerColor = disconnectedPlayerColor === 'black' ? 'white' : 'black';
  const winner = gameState.players[winnerColor];
  const loser = gameState.players[disconnectedPlayerColor];
  const blackPlayer = gameState.players.black;
  const whitePlayer = gameState.players.white;

  if (winner && loser && blackPlayer && whitePlayer) {
    gameState.winner = winnerColor;
    const moveCount = gameState.board.flat().filter((cell) => cell !== null).length;
    saveGameResult(winner.id, loser.id, blackPlayer.id, whitePlayer.id, moveCount, winnerColor);
    
    io.to(roomId).emit('updateGame', gameState);
    io.to(roomId).emit('playerForfeited', `${disconnectedPlayerColor} has left the game. ${winnerColor} wins by forfeit.`);
    
    // Clean up the game state after a short delay
    setTimeout(() => gameStates.delete(roomId), 5000);
  } else {
    // If only one player was in the room, just clean it up
    gameStates.delete(roomId);
  }
}

export function initSocket(io: Server) {
  io.on('connection', (socket: Socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('createRoom', ({ name }: { name: string }) => {
      const newRoom: Room = {
        id: `room_${Date.now()}`,
        name,
      };
      rooms.push(newRoom);
      io.emit('roomListUpdate', rooms);
    });

    socket.on('joinRoom', (roomId: string) => {
      socket.join(roomId);
      console.log(`User ${socket.id} joined room ${roomId}`);
      socket.to(roomId).emit('userJoined', `A user has joined the room.`);

      if (!gameStates.has(roomId)) {
        gameStates.set(roomId, {
          board: Array(15).fill(null).map(() => Array(15).fill(null)),
          players: { black: null, white: null },
          currentPlayer: 'black',
          winner: null,
        });
      }
      socket.emit('updateGame', gameStates.get(roomId));
    });

    socket.on('playerReady', ({ roomId, userId }: { roomId: string; userId: string }) => {
      const gameState = gameStates.get(roomId);
      if (!gameState) return;

      const isPlayerAlreadyIn = gameState.players.black?.id === userId || gameState.players.white?.id === userId;
      if (isPlayerAlreadyIn) {
        io.to(roomId).emit('updateGame', gameState); // Re-send state to reconnecting player
        return;
      }

      if (!gameState.players.black) {
        gameState.players.black = { id: userId, socketId: socket.id };
        console.log(`Player black set: ${userId}`);
      } else if (!gameState.players.white) {
        gameState.players.white = { id: userId, socketId: socket.id };
        console.log(`Player white set: ${userId}`);
      }

      io.to(roomId).emit('updateGame', gameState);
    });

    socket.on('placeStone', async ({ roomId, row, col }: { roomId: string; row: number; col: number }) => {
      const gameState = gameStates.get(roomId);
      if (!gameState || gameState.winner) return;

      const playerColor = Object.keys(gameState.players).find((color) =>
        gameState.players[color as PlayerColor]?.socketId === socket.id
      ) as PlayerColor | undefined;

      if (playerColor && gameState.currentPlayer === playerColor) {
        if (gameState.board[row][col] === null) {
          gameState.board[row][col] = playerColor;

          // --- Rule checks for Black player ---
          if (playerColor === 'black') {
            // 1. Check for overlines, which is a loss for black.
            if (checkOverline(gameState.board, row, col)) {
              gameState.winner = 'white'; // White wins
              const winner = gameState.players.white;
              const loser = gameState.players.black;
              if (winner && loser) {
                const moveCount = gameState.board.flat().filter(c => c).length;
                saveGameResult(winner.id, loser.id, loser.id, winner.id, moveCount, 'white');
                io.to(roomId).emit('gameOver', { winner: 'white', message: 'Black loses due to an overline.' });
              }
              io.to(roomId).emit('updateGame', gameState);
              return; // End the move processing
            }

            // 2. Check for other forbidden patterns (3-3, 4-4, etc.)
            if (await isMoveForbidden(gameState.board, row, col, playerColor)) {
              gameState.winner = 'white'; // White wins
              const winner = gameState.players.white;
              const loser = gameState.players.black;
              if (winner && loser) {
                const moveCount = gameState.board.flat().filter(c => c).length;
                saveGameResult(winner.id, loser.id, loser.id, winner.id, moveCount, 'white');
                io.to(roomId).emit('gameOver', { winner: 'white', message: `Black loses due to a forbidden move.` });
              }
              io.to(roomId).emit('updateGame', gameState);
              return; // End the move processing
            }
          }

          // --- Win check for both players ---
          if (checkWin(gameState.board, row, col)) {
            gameState.winner = playerColor;
            const winner = gameState.players[playerColor];
            const loserColor = playerColor === 'black' ? 'white' : 'black';
            const loser = gameState.players[loserColor];
            const blackPlayer = gameState.players.black;
            const whitePlayer = gameState.players.white;

            if (winner && loser && blackPlayer && whitePlayer) {
              const moveCount = gameState.board.flat().filter((cell) => cell !== null).length;
              saveGameResult(winner.id, loser.id, blackPlayer.id, whitePlayer.id, moveCount, playerColor);
            }
          } else {
            gameState.currentPlayer = playerColor === 'black' ? 'white' : 'black';
          }

          io.to(roomId).emit('updateGame', gameState);
        }
      }
    });

    socket.on('chatMessage', ({ roomId, message }: { roomId: string; message: string }) => {
      io.to(roomId).emit('chatMessage', message);
    });

    socket.on('leaveRoom', (roomId: string) => {
      socket.leave(roomId);
      console.log(`User ${socket.id} left room ${roomId}`);
      
      const playerColor = Object.keys(gameStates.get(roomId)?.players || {}).find((color) =>
        gameStates.get(roomId)!.players[color as PlayerColor]?.socketId === socket.id
      ) as PlayerColor | undefined;

      if (playerColor) {
        handleForfeit(io, roomId, playerColor);
      }
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
      for (const [roomId, gameState] of gameStates.entries()) {
        const playerColor = Object.keys(gameState.players).find((color) =>
          gameState.players[color as PlayerColor]?.socketId === socket.id
        ) as PlayerColor | undefined;

        if (playerColor) {
          console.log(`Player ${playerColor} (${socket.id}) disconnected from room ${roomId}`);
          handleForfeit(io, roomId, playerColor);
          break;
        }
      }
    });
  });
}

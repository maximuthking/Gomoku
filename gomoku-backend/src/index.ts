import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file in the parent directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import { PrismaClient } from '../generated/prisma';

// Initialize Prisma Client
const prisma = new PrismaClient();

// IMPORTANT: This needs to be imported for passport configuration to run
import './passport-setup';

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
app.use(cors({ 
    origin: 'http://localhost:3000', 
    credentials: true 
}));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Auth Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login-failed',
    successRedirect: 'http://localhost:3000', // Redirect to frontend
  })
);

// Middleware to check if user is authenticated
const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'User not authenticated' });
};

// API Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Gomoku backend server is running!');
});

app.get('/api/profile', isAuthenticated, (req: Request, res: Response) => {
  res.json(req.user);
});

app.post('/auth/logout', (req, res, next) => {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Endpoint to update user's nickname
app.put('/api/profile/nickname', isAuthenticated, async (req: Request, res: Response) => {
  const { nickname } = req.body;
  const userId = (req.user as any).id;

  if (!nickname || typeof nickname !== 'string' || nickname.length < 3) {
    return res.status(400).json({ message: 'Nickname must be at least 3 characters long.' });
  }

  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { nickname },
    });
    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating nickname:", error);
    res.status(500).json({ message: 'Error updating nickname' });
  }
});

import http from 'http';
import { Server } from 'socket.io';

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

interface Room {
  id: string;
  name: string;
}

let rooms: Room[] = [];

// In-memory store for game states
const gameStates = new Map<string, { 
  board: (string | null)[][], 
  players: { 
    black: { id: string, socketId: string } | null, 
    white: { id: string, socketId: string } | null 
  }, 
  currentPlayer: string, 
  winner: string | null 
}>();

const BOARD_SIZE = 15;

function isInBounds(row: number, col: number): boolean {
  return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
}

function countLine(board: (string | null)[][], row: number, col: number, dr: number, dc: number): number {
    const player = board[row][col];
    if (!player) return 0;
    let count = 1;
    
    // Count in the positive direction
    let r = row + dr;
    let c = col + dc;
    while (isInBounds(r, c) && board[r][c] === player) {
        count++;
        r += dr;
        c += dc;
    }

    // Count in the negative direction
    r = row - dr;
    c = col - dc;
    while (isInBounds(r, c) && board[r][c] === player) {
        count++;
        r -= dr;
        c -= dc;
    }
    return count;
}

function checkWin(board: (string | null)[][], row: number, col: number): { isWin: boolean, player: string | null } {
    const player = board[row][col];
    if (!player) return { isWin: false, player: null };

    const directions = [{ dr: 1, dc: 0 }, { dr: 0, dc: 1 }, { dr: 1, dc: 1 }, { dr: 1, dc: -1 }];

    for (const { dr, dc } of directions) {
        const count = countLine(board, row, col, dr, dc);
        if (player === 'black' && count === 5) return { isWin: true, player };
        if (player === 'white' && count >= 5) return { isWin: true, player };
    }

    return { isWin: false, player: null };
}

function isForbidden(board: (string | null)[][], row: number, col: number): { forbidden: boolean, type: string | null } {
    const player = 'black';
    const directions = [{ dr: 1, dc: 0 }, { dr: 0, dc: 1 }, { dr: 1, dc: 1 }, { dr: 1, dc: -1 }];

    // Check for overline (already placed, so it must be > 5)
    for (const { dr, dc } of directions) {
        if (countLine(board, row, col, dr, dc) > 5) {
            return { forbidden: true, type: 'overline' };
        }
    }
    
    // Simplified 3-3 and 4-4 check
    let openThrees = 0;
    let openFours = 0;

    for (const { dr, dc } of directions) {
        let consecutive = 1;
        let openEnds = 0;

        // Positive direction
        let r = row + dr;
        let c = col + dc;
        while (isInBounds(r, c) && board[r][c] === player) {
            consecutive++;
            r += dr;
            c += dc;
        }
        if (isInBounds(r, c) && board[r][c] === null) openEnds++;

        // Negative direction
        r = row - dr;
        c = col - dc;
        while (isInBounds(r, c) && board[r][c] === player) {
            consecutive++;
            r -= dr;
            c -= dc;
        }
        if (isInBounds(r, c) && board[r][c] === null) openEnds++;

        if (consecutive === 3 && openEnds === 2) openThrees++;
        if (consecutive === 4 && openEnds >= 1) openFours++;
    }

    if (openThrees >= 2) return { forbidden: true, type: '3-3' };
    if (openFours >= 2) return { forbidden: true, type: '4-4' };

    return { forbidden: false, type: null };
}

async function saveGameResult(winnerId: string, loserId: string, blackPlayerId: string, whitePlayerId: string, moveCount: number, winnerColor: string) {
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
        }
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
        }
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
        }
      })
    ]);
    console.log(`Game result saved for winner: ${winnerId} and loser: ${loserId}`);
  } catch (error) {
    console.error("Error saving game result:", error);
  }
}

io.on('connection', (socket) => {
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

  socket.on('playerReady', ({ roomId, userId }: { roomId: string, userId: string }) => {
    const gameState = gameStates.get(roomId);
    if (!gameState) return;

    if (!gameState.players.black) {
      gameState.players.black = { id: userId, socketId: socket.id };
      console.log(`Player black set: ${userId}`);
    } else if (!gameState.players.white && gameState.players.black.id !== userId) {
      gameState.players.white = { id: userId, socketId: socket.id };
      console.log(`Player white set: ${userId}`);
    }

    io.to(roomId).emit('updateGame', gameState);
  });

  socket.on('placeStone', ({ roomId, row, col }: { roomId: string; row: number; col: number }) => {
    const gameState = gameStates.get(roomId);
    if (!gameState || gameState.winner || !isInBounds(row, col)) return;

    const playerColor = Object.keys(gameState.players).find(color => gameState.players[color as keyof typeof gameState.players]?.socketId === socket.id);

    if (playerColor && gameState.currentPlayer === playerColor) {
        if (gameState.board[row][col] !== null) {
            socket.emit('invalidMove', { message: 'This position is already taken.' });
            return;
        }

        // Place the stone
        gameState.board[row][col] = playerColor;

        // Check for win
        const winCheck = checkWin(gameState.board, row, col);
        if (winCheck.isWin) {
            gameState.winner = winCheck.player;
            const winner = gameState.players[winCheck.player! as keyof typeof gameState.players];
            const loserColor = winCheck.player === 'black' ? 'white' : 'black';
            const loser = gameState.players[loserColor as keyof typeof gameState.players];
            const blackPlayer = gameState.players.black;
            const whitePlayer = gameState.players.white;

            if (winner && loser && blackPlayer && whitePlayer) {
                const moveCount = gameState.board.flat().filter(cell => cell !== null).length;
                saveGameResult(winner.id, loser.id, blackPlayer.id, whitePlayer.id, moveCount, winCheck.player!);
            }
            io.to(roomId).emit('updateGame', gameState);
            return;
        }

        // If not a win, check for forbidden moves for Black
        if (playerColor === 'black') {
            const forbiddenCheck = isForbidden(gameState.board, row, col);
            if (forbiddenCheck.forbidden) {
                // Revert the move
                gameState.board[row][col] = null; 
                socket.emit('invalidMove', { message: `Forbidden move: ${forbiddenCheck.type}` });
                io.to(roomId).emit('updateGame', gameState); // Send back the reverted state
                return;
            }
        }

        // If move is valid and not a win, switch player
        gameState.currentPlayer = playerColor === 'black' ? 'white' : 'black';
        io.to(roomId).emit('updateGame', gameState);
    }
  });

  socket.on('chatMessage', ({ roomId, message }: { roomId: string; message: string }) => {
    io.to(roomId).emit('chatMessage', message);
  });

  socket.on('leaveRoom', (roomId: string) => {
    socket.leave(roomId);
    console.log(`User ${socket.id} left room ${roomId}`);
    socket.to(roomId).emit('userLeft', `User ${socket.id} has left the room.`);
    // TODO: Handle game state when a user leaves (e.g., end game)
  });

  socket.on('disconnect', () => {
    for (const [roomId, gameState] of gameStates.entries()) {
      const playerColor = Object.keys(gameState.players).find(color => gameState.players[color as keyof typeof gameState.players]?.socketId === socket.id);
      if (playerColor) {
        console.log(`Player ${playerColor} (${socket.id}) disconnected from room ${roomId}`);
        io.to(roomId).emit('playerDisconnected', `${playerColor} has disconnected.`);
        // TODO: Handle forfeit
        gameStates.delete(roomId); // Simple cleanup
        break;
      }
    }
    console.log(`User disconnected: ${socket.id}`);
  });
});


// API endpoint to get the list of rooms
app.get('/api/rooms', (req: Request, res: Response) => {
  res.json(rooms);
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;

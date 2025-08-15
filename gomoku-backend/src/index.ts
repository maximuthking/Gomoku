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

// Helper function to check boundaries
function isInBounds(row: number, col: number): boolean {
  return row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
}

// Helper function to count consecutive stones in a given direction
function countStones(board: (string | null)[][], row: number, col: number, dr: number, dc: number, player: string): number {
    let count = 0;
    let r = row + dr;
    let c = col + dc;
    while (isInBounds(r, c) && board[r][c] === player) {
        count++;
        r += dr;
        c += dc;
    }
    return count;
}

// Renju rule validation for Black
function isMoveForbidden(board: (string | null)[][], row: number, col: number): { forbidden: boolean, type: string | null } {
    const player = 'black';
    const tempBoard = board.map(row => [...row]);
    tempBoard[row][col] = player;

    const directions = [
        { dr: 0, dc: 1 },  // Horizontal
        { dr: 1, dc: 0 },  // Vertical
        { dr: 1, dc: 1 },  // Diagonal \
        { dr: 1, dc: -1 }  // Diagonal /
    ];

    // Check for overline (6 or more stones)
    for (const { dr, dc } of directions) {
        const count = 1 + countStones(tempBoard, row, col, dr, dc, player) + countStones(tempBoard, row, col, -dr, -dc, player);
        if (count > 5) {
            // An overline is only a winning move for white. For black it's a forbidden move if it doesn't also complete a 5.
            // But standard renju rules just forbid creating an overline.
            return { forbidden: true, type: 'overline' };
        }
    }

    let openThrees = 0;
    let openFours = 0;

    for (const { dr, dc } of directions) {
        let consecutive = 1;
        let openEnds = 0;
        let spaces = [];

        // Count in one direction
        let r = row + dr;
        let c = col + dc;
        while (isInBounds(r, c) && tempBoard[r][c] === player) {
            consecutive++;
            r += dr;
            c += dc;
        }
        // Check for open end
        if (isInBounds(r, c) && tempBoard[r][c] === null) {
            openEnds++;
            spaces.push({r,c});
        }

        // Count in opposite direction
        r = row - dr;
        c = col - dc;
        while (isInBounds(r, c) && tempBoard[r][c] === player) {
            consecutive++;
            r -= dr;
            c -= dc;
        }
        // Check for open end
        if (isInBounds(r, c) && tempBoard[r][c] === null) {
            openEnds++;
            spaces.push({r,c});
        }

        // This is a simplified check. A full implementation is more complex.
        // This simplified version checks for patterns that are likely to be 3-3 or 4-4.
        if (consecutive === 3 && openEnds === 2) {
            openThrees++;
        }
        if (consecutive === 4 && openEnds >= 1) {
            openFours++;
        }
    }

    // A move is 3-3 if it creates two open threes.
    if (openThrees >= 2) return { forbidden: true, type: '3-3' };
    // A move is 4-4 if it creates two fours.
    if (openFours >= 2) return { forbidden: true, type: '4-4' };

    return { forbidden: false, type: null };
}


function checkWin(board: (string | null)[][], row: number, col: number): { isWin: boolean, player: string | null } {
  const player = board[row][col];
  if (!player) return { isWin: false, player: null };

  const directions = [
    { x: 1, y: 0 }, // Horizontal
    { x: 0, y: 1 }, // Vertical
    { x: 1, y: 1 }, // Diagonal \
    { x: 1, y: -1 } // Diagonal /
  ];

  for (const dir of directions) {
    let count = 1;
    // Count in the positive direction
    for (let i = 1; i < 6; i++) {
        const newRow = row + dir.y * i;
        const newCol = col + dir.x * i;
        if (isInBounds(newRow, newCol) && board[newRow][newCol] === player) {
            count++;
        } else {
            break;
        }
    }
    // Count in the negative direction
    for (let i = 1; i < 6; i++) {
        const newRow = row - dir.y * i;
        const newCol = col - dir.x * i;
        if (isInBounds(newRow, newCol) && board[newRow][newCol] === player) {
            count++;
        } else {
            break;
        }
    }

    if (player === 'black') {
        if (count === 5) return { isWin: true, player };
    } else { // 'white'
        if (count >= 5) return { isWin: true, player };
    }
  }

  return { isWin: false, player: null };
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

      // Renju rule validation for black player
      if (playerColor === 'black') {
        const validation = isMoveForbidden(gameState.board, row, col);
        if (validation.forbidden) {
          socket.emit('invalidMove', { message: `Forbidden move: ${validation.type}` });
          return;
        }
      }

      // Place the stone
      gameState.board[row][col] = playerColor;

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
      } else {
        gameState.currentPlayer = playerColor === 'black' ? 'white' : 'black';
      }

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

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

/**
 * 지정된 위치에 돌을 놓았을 때 렌주룰에 따른 금수인지 판정합니다.
 * @param board 현재 바둑판 상태
 * @param row 돌을 놓을 행 인덱스
 * @param col 돌을 놓을 열 인덱스
 * @returns 금수 여부와 금수 유형을 포함한 객체
 */
export function isForbidden(board: (string | null)[][], row: number, col: number): { forbidden: boolean, type: string | null } {
    const player = 'black';

    // 임시로 돌을 놓아보고 확인
    board[row][col] = player;

    const directions = [{ dr: 1, dc: 0 }, { dr: 0, dc: 1 }, { dr: 1, dc: 1 }, { dr: 1, dc: -1 }];

    // 장목(6목 이상) 확인
    for (const { dr, dc } of directions) {
        if (countLine(board, row, col, dr, dc) > 5) {
            board[row][col] = null; // 보드 상태 원상 복구
            return { forbidden: true, type: 'overline' };
        }
    }

    let threeCount = 0;
    let fourCount = 0;

    for (const { dr, dc } of directions) {
        // 3-3, 4-4 확인 로직
        if (isThree(board, row, col, dr, dc, player)) {
            threeCount++;
        }
        if (isFour(board, row, col, dr, dc, player)) {
            fourCount++;
        }
    }

    board[row][col] = null; // 보드 상태 원상 복구

    if (threeCount >= 2) return { forbidden: true, type: '3-3' };
    if (fourCount >= 2) return { forbidden: true, type: '4-4' };

    return { forbidden: false, type: null };
}

/**
 * 특정 위치에 돌을 놓았을 때 '열린 3'이 형성되는지 확인합니다.
 * @param board 바둑판 상태
 * @param r 행
 * @param c 열
 * @param dr 방향 벡터 (행)
 * @param dc 방향 벡터 (열)
 * @param player 현재 플레이어
 * @returns '열린 3' 여부
 */
function isThree(board: (string | null)[][], r: number, c: number, dr: number, dc: number, player: string): boolean {
    // 패턴 예시: O_XXX_O (O: 빈 칸, X: 현재 플레이어의 돌)
    // 1. X_XX 패턴: O X _ X X O
    let line = getLine(board, r, c, dr, dc, player, 4);
    if (line.match(/_..._/)) { // 양쪽이 열려있어야 함
        if ((line.match(/X_XX/g) || []).length === 1 && line.indexOf('X_XX') === 1) return true;
        if ((line.match(/XX_X/g) || []).length === 1 && line.indexOf('XX_X') === 1) return true;
    }

    // 2. _X_X_ 패턴: O X _ X _ O
    line = getLine(board, r, c, dr, dc, player, 5);
    if (line.match(/_....._/)) {
        if ((line.match(/X_X_X/g) || []).length === 1 && line.indexOf('X_X_X') === 1) return true;
    }

    return false;
}

/**
 * 특정 위치에 돌을 놓았을 때 '4'가 형성되는지 확인합니다.
 * @param board 바둑판 상태
 * @param r 행
 * @param c 열
 * @param dr 방향 벡터 (행)
 * @param dc 방향 벡터 (열)
 * @param player 현재 플레이어
 * @returns '4' 여부
 */
function isFour(board: (string | null)[][], r: number, c: number, dr: number, dc: number, player: string): boolean {
    // 패턴 예시: _XXXX_ (열린 4), OXXXX_ (반열린 4)
    const line = getLine(board, r, c, dr, dc, player, 5); // XXXXX
    if ((line.match(/XXXXX/g) || []).length > 0) return false; // 5목은 금수가 아님

    // 열린 4 또는 닫힌 4
    if ((line.match(/_XXXX/g) || []).length > 0) return true;
    if ((line.match(/X_XXX/g) || []).length > 0) return true;
    if ((line.match(/XX_XX/g) || []).length > 0) return true;
    if ((line.match(/XXX_X/g) || []).length > 0) return true;
    if ((line.match(/XXXX_/g) || []).length > 0) return true;

    return false;
}

/**
 * 특정 축을 기준으로 돌의 배열을 문자열로 반환합니다.
 * @param board 바둑판 상태
 * @param r 행
 * @param c 열
 * @param dr 방향 벡터 (행)
 * @param dc 방향 벡터 (열)
 * @param player 현재 플레이어
 * @param length 확인할 길이
 * @returns 라인 문자열 (예: "O_X_X_")
 */
function getLine(board: (string | null)[][], r: number, c: number, dr: number, dc: number, player: string, length: number): string {
    let line = '';
    for (let i = -length; i <= length; i++) {
        const curR = r + i * dr;
        const curC = c + i * dc;

        if (!isInBounds(curR, curC)) {
            line += 'O'; // 'O'는 상대방 돌 또는 벽
        } else if (board[curR][curC] === null) {
            line += '_';
        } else if (board[curR][curC] === player) {
            line += 'X';
        } else {
            line += 'O';
        }
    }
    return line;
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

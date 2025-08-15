import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file in the parent directory
dotenv.config({ path: path.resolve(__dirname, '../.env') });

import express, { Request, Response, NextFunction } from 'express';
import session from 'express-session';
import passport from 'passport';
import { PrismaClient } from '../generated/prisma';

// Initialize Prisma Client
const prisma = new PrismaClient();

// IMPORTANT: This needs to be imported for passport configuration to run
import './passport-setup';

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares
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

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  const socketRooms = new Map<string, string>();

  socket.on('joinRoom', (roomId: string) => {
    socket.join(roomId);
    socketRooms.set(socket.id, roomId);
    console.log(`User ${socket.id} joined room ${roomId}`);
    socket.to(roomId).emit('userJoined', `User ${socket.id} has joined the room.`);
  });

  socket.on('leaveRoom', (roomId: string) => {
    socket.leave(roomId);
    socketRooms.delete(socket.id);
    console.log(`User ${socket.id} left room ${roomId}`);
    socket.to(roomId).emit('userLeft', `User ${socket.id} has left the room.`);
  });

  socket.on('createRoom', ({ name }: { name: string }) => {
    const newRoom: Room = {
      id: `room_${Date.now()}`,
      name,
    };
    rooms.push(newRoom);
    io.emit('roomListUpdate', rooms);
  });

  socket.on('chatMessage', ({ roomId, message }: { roomId: string; message: string }) => {
    io.to(roomId).emit('chatMessage', message);
  });

  socket.on('disconnect', () => {
    const roomId = socketRooms.get(socket.id);
    if (roomId) {
      socket.to(roomId).emit('userLeft', `User ${socket.id} has disconnected.`);
      socketRooms.delete(socket.id);
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

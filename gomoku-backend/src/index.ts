import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file in the parent directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'; // Must be imported before routes
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

// IMPORTANT: This needs to be imported for passport configuration to run
import './passport-setup';

import apiRoutes from './routes/api';
import patternRoutes from './routes/patternRoutes';
import { initSocket } from './socket';

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
    secret: process.env.SESSION_SECRET || 'a-secret-key-for-development',
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

// API Routes
app.use('/api', patternRoutes);
app.use('/', apiRoutes);

// Central Error Handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  // Handle Prisma-specific errors
  if ((err as any).code === 'P2002') {
    return res.status(409).json({ message: 'A resource with this value already exists.' });
  }
  res.status(500).json({ message: err.message || 'Something went wrong!' });
});

// Setup Server and Socket.IO
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Initialize Socket.IO event handlers
initSocket(io);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;

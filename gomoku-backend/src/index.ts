import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from .env file in the parent directory
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

import express from 'express';
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
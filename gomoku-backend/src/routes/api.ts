import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { PrismaClient } from '../../generated/prisma';
import { rooms } from '../services/gameService';

const router = express.Router();
const prisma = new PrismaClient();

// Middleware to check if user is authenticated
export const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: 'User not authenticated' });
};

// Auth Routes
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:3000/login-failed', // It's better to redirect to a specific frontend route
    successRedirect: 'http://localhost:3000', // Redirect to frontend
  })
);

router.post('/auth/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err); }
    // Sending a success response is better for APIs than redirecting
    res.status(200).json({ message: 'Successfully logged out' });
  });
});

// API Routes
router.get('/', (req: Request, res: Response) => {
  res.send('Gomoku backend server is running!');
});

router.get('/api/profile', isAuthenticated, (req: Request, res: Response) => {
  res.json(req.user);
});

router.put('/api/profile/nickname', isAuthenticated, async (req: Request, res: Response) => {
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
    console.error('Error updating nickname:', error);
    // Check for unique constraint violation
    if ((error as any).code === 'P2002') {
        return res.status(409).json({ message: 'Nickname is already taken.' });
    }
    res.status(500).json({ message: 'Error updating nickname' });
  }
});

// API endpoint to get the list of rooms
router.get('/api/rooms', (req: Request, res: Response) => {
  res.json(rooms);
});

// API endpoint to get user stats
router.get('/api/stats', isAuthenticated, async (req: Request, res: Response) => {
  const userId = (req.user as any).id;
  try {
    const userStats = await prisma.userStats.findUnique({
      where: {
        userId_gameType: {
          userId: userId,
          gameType: 'GOMOKU',
        },
      },
    });

    if (!userStats) {
      // Return default stats if user has not played any games
      return res.json({
        totalPlays: 0,
        wins: 0,
        losses: 0,
        winsAsBlack: 0,
        winsAsWhite: 0,
      });
    }

    res.json(userStats);
  } catch (error) {
    console.error('Error fetching user stats:', error);
    res.status(500).json({ message: 'Error fetching user stats' });
  }
});

// API endpoint to get rival stats
router.get('/api/rivals', isAuthenticated, async (req: Request, res: Response) => {
  const userId = (req.user as any).id;

  try {
    const games = await prisma.gameRecord.findMany({
      where: {
        OR: [
          { winnerId: userId },
          { loserId: userId },
        ],
        gameType: 'GOMOKU',
      },
      include: {
        winner: { select: { id: true, nickname: true } },
        loser: { select: { id: true, nickname: true } },
      },
    });

    const rivalStats: { [key: string]: { nickname: string, wins: number, losses: number } } = {};

    for (const game of games) {
      const opponent =
        game.winnerId === userId
          ? game.loser
          : game.winner;

      if (!opponent || !opponent.id || !opponent.nickname) continue; // Skip if opponent data is missing

      if (!rivalStats[opponent.id]) {
        rivalStats[opponent.id] = {
          nickname: opponent.nickname,
          wins: 0,
          losses: 0,
        };
      }

      if (game.winnerId === userId) {
        rivalStats[opponent.id].wins += 1;
      } else {
        rivalStats[opponent.id].losses += 1;
      }
    }

    const rivalsList = Object.entries(rivalStats).map(([id, stats]) => ({
      opponentId: id,
      ...stats,
    }));

    res.json(rivalsList);

  } catch (error) {
    console.error('Error fetching rival stats:', error);
    res.status(500).json({ message: 'Error fetching rival stats' });
  }
});

export default router;

import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { PrismaClient, User } from '../../generated/prisma'; // Import User type
import { getRooms } from '../services/gameService';

const router = express.Router();
const prisma = new PrismaClient();

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
    failureRedirect: 'http://localhost:3000/login-failed',
    successRedirect: 'http://localhost:3000',
  })
);

router.post('/auth/logout', (req, res, next) => {
  req.logout(function (err) {
    if (err) { return next(err); }
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
  const user = req.user as User;

  if (!user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  if (!nickname || typeof nickname !== 'string' || nickname.length < 3) {
    return res.status(400).json({ message: 'Nickname must be at least 3 characters long.' });
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: { nickname },
  });
  res.json(updatedUser);
});

router.get('/api/rooms', isAuthenticated, async (req: Request, res: Response) => {
  const rooms = await getRooms();
  res.json(rooms);
});

router.get('/api/stats', isAuthenticated, async (req: Request, res: Response) => {
  const user = req.user as User;
  if (!user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }
  const userStats = await prisma.userStats.findUnique({
    where: {
      userId_gameType: {
        userId: user.id,
        gameType: 'GOMOKU',
      },
    },
  });

  if (!userStats) {
    return res.json({
      totalPlays: 0,
      wins: 0,
      losses: 0,
      winsAsBlack: 0,
      winsAsWhite: 0,
    });
  }

  res.json(userStats);
});

router.get('/api/rivals', isAuthenticated, async (req: Request, res: Response) => {
  const user = req.user as User;
  if (!user) {
    return res.status(401).json({ message: 'User not authenticated' });
  }
  const userId = user.id;

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

    if (!opponent || !opponent.id || !opponent.nickname) continue;

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
});

export default router;
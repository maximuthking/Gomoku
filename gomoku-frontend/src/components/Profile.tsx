import React, { useState, useEffect } from 'react';
import { fetchStats, fetchRivals } from '../api/client';
import { PublicUser } from '@gomoku/common/types';

interface ProfileProps {
  user: PublicUser;
  onBack: () => void;
}

interface UserStats {
  totalPlays: number;
  wins: number;
  losses: number;
  winsAsBlack: number;
  winsAsWhite: number;
}

interface RivalStat {
  opponentId: string;
  nickname: string;
  wins: number;
  losses: number;
}

const Profile: React.FC<ProfileProps> = ({ user, onBack }) => {
  const [stats, setStats] = useState<UserStats | null>(null);
  const [rivals, setRivals] = useState<RivalStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const [statsData, rivalsData] = await Promise.all([
          fetchStats(),
          fetchRivals(),
        ]);
        setStats(statsData);
        setRivals(rivalsData);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const calculateWinRate = () => {
    if (!stats || stats.totalPlays === 0) {
      return '0.00';
    }
    return ((stats.wins / stats.totalPlays) * 100).toFixed(2);
  };

  if (loading) {
    return <div>Loading stats...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{user.nickname}'s Profile</h1>
      <button onClick={onBack}>Back to Lobby</button>
      {stats ? (
        <div>
          <h2>Gomoku Stats</h2>
          <p><strong>Win Rate:</strong> {calculateWinRate()}%</p>
          <p><strong>Total Games:</strong> {stats.totalPlays}</p>
          <p><strong>Wins:</strong> {stats.wins}</p>
          <p><strong>Losses:</strong> {stats.losses}</p>
          <p><strong>Wins as Black:</strong> {stats.winsAsBlack}</p>
          <p><strong>Wins as White:</strong> {stats.winsAsWhite}</p>
        </div>
      ) : (
        <p>No stats available. Play a game!</p>
      )}

      <hr />

      <h2>Rival Stats</h2>
      {rivals.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Opponent</th>
              <th>Record (W-L)</th>
            </tr>
          </thead>
          <tbody>
            {rivals.map((rival) => (
              <tr key={rival.opponentId}>
                <td>{rival.nickname}</td>
                <td>{rival.wins} - {rival.losses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No rival data available. Play against someone!</p>
      )}
    </div>
  );
};

export default Profile;
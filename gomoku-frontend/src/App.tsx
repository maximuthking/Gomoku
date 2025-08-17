import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Lobby from './components/Lobby';
import GameRoom from './components/GameRoom';
import Profile from './components/Profile';
import ForbiddenPatternEditor from './components/ForbiddenPatternEditor';
import { fetchProfile, updateNickname } from './api/client';
import { UserProfile, PublicUser } from '@gomoku/common/types';

// Extend UserProfile to include optional guest status for frontend state
type AppUser = UserProfile & { isGuest?: boolean };

function App() {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
  const [viewingProfile, setViewingProfile] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const userData = await fetchProfile();
        setUser(userData);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  const handleNicknameUpdate = async (nickname: string) => {
    if (!user) return;

    try {
      const updatedUser = await updateNickname(nickname);
      setUser({ ...user, ...updatedUser });
    } catch (error) {
      console.error('Failed to update nickname:', error);
      alert((error as Error).message);
    }
  };

  const handleJoinRoom = (roomId: string) => {
    setActiveRoomId(roomId);
  };

  const handleLeaveRoom = () => {
    setActiveRoomId(null);
  };

  const handleGuestLogin = () => {
    const guestId = `guest_${Date.now()}`;
    setUser({
      id: guestId,
      email: `${guestId}@guest.com`,
      name: 'Guest User',
      nickname: `Guest${Math.floor(Math.random() * 1000)}`,
      profileImage: null,
      isGuest: true,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderContent = () => {
    if (window.location.pathname === '/forbidden-pattern-editor') {
      return <ForbiddenPatternEditor />;
    }

    if (!user) {
      return <Login onGuestLogin={handleGuestLogin} />;
    }

    const publicUser: PublicUser = { id: user.id, nickname: user.nickname || '' };

    if (activeRoomId && publicUser.nickname) {
      return <GameRoom roomId={activeRoomId} user={publicUser} onLeave={handleLeaveRoom} />;
    }
    if (viewingProfile) {
      return <Profile user={publicUser} onBack={() => setViewingProfile(false)} />;
    }
    return <Lobby user={{...publicUser, isGuest: user.isGuest, displayName: user.name}} onNicknameUpdate={handleNicknameUpdate} onJoinRoom={handleJoinRoom} onNavigateToProfile={() => setViewingProfile(true)} />;
  };

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;

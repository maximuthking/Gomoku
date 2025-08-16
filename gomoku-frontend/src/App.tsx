import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Lobby from './components/Lobby';
import GameRoom from './components/GameRoom';
import Profile from './components/Profile';
import { fetchProfile, updateNickname } from './api/client';

// Define a type for the user object
interface User {
  id?: string;
  googleId?: string;
  displayName?: string;
  email?: string;
  nickname?: string;
  isGuest?: boolean;
  // add other user properties here if they exist
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeRoomId, setActiveRoomId] = useState<string | null>(null);
  const [viewingProfile, setViewingProfile] = useState(false);

  useEffect(() => {
    // Fetch user profile to check for an active session
    const checkSession = async () => {
      try {
        const userData = await fetchProfile();
        setUser(userData);
      } catch (error) {
        // If fetchProfile throws an error (e.g., 401), it means user is not logged in
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
      setUser(updatedUser);
    } catch (error) {
      console.error('Failed to update nickname:', error);
      // Optionally, show an error message to the user
      // e.g., alert((error as Error).message);
    }
  };

  const handleJoinRoom = (roomId: string) => {
    setActiveRoomId(roomId);
  };

  const handleLeaveRoom = () => {
    setActiveRoomId(null);
  };

  const handleGuestLogin = () => {
    const guestId = `guest_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    const guestNickname = `Guest${Math.floor(Math.random() * 10000)}`;
    setUser({ 
      id: guestId,
      nickname: guestNickname, 
      isGuest: true 
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const renderContent = () => {
    if (!user) {
      return <Login onGuestLogin={handleGuestLogin} />;
    }
    if (activeRoomId && user.id && user.nickname) {
      return <GameRoom roomId={activeRoomId} user={{ id: user.id!, nickname: user.nickname! }} onLeave={handleLeaveRoom} />;
    }
    if (viewingProfile) {
      return <Profile user={user} onBack={() => setViewingProfile(false)} />;
    }
    return <Lobby user={user} onNicknameUpdate={handleNicknameUpdate} onJoinRoom={handleJoinRoom} onNavigateToProfile={() => setViewingProfile(true)} />;
  };

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;
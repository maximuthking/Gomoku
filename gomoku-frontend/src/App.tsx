import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Lobby from './components/Lobby';
import GameRoom from './components/GameRoom';

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

  useEffect(() => {
    // Fetch user profile to check for an active session
    const fetchUser = async () => {
      try {
        // The credentials option is important for sending cookies
        const response = await fetch('http://localhost:4000/api/profile', { credentials: 'include' });
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          // Not logged in
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleNicknameUpdate = async (nickname: string) => {
    if (!user) return;

    try {
      const response = await fetch('http://localhost:4000/api/profile/nickname', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nickname }),
        credentials: 'include',
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setUser(updatedUser);
      } else {
        console.error('Failed to update nickname');
        // Optionally, show an error message to the user
      }
    } catch (error) {
      console.error('Error updating nickname:', error);
    }
  };

  const handleJoinRoom = (roomId: string) => {
    setActiveRoomId(roomId);
  };

  const handleLeaveRoom = () => {
    setActiveRoomId(null);
  };

  const handleGuestLogin = () => {
    const guestNickname = `Guest${Math.floor(Math.random() * 10000)}`;
    setUser({ 
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
    if (activeRoomId && user.nickname) {
      return <GameRoom roomId={activeRoomId} user={{...user, nickname: user.nickname}} onLeave={handleLeaveRoom} />;
    }
    return <Lobby user={user} onNicknameUpdate={handleNicknameUpdate} onJoinRoom={handleJoinRoom} />;
  };

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;
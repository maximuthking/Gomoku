import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface LobbyProps {
  user: {
    displayName?: string;
    nickname?: string;
    isGuest?: boolean;
  };
  onNicknameUpdate: (nickname: string) => void;
  onJoinRoom: (roomId: string) => void;
}

interface Room {
  id: string;
  name: string;
}

const Lobby: React.FC<LobbyProps> = ({ user, onNicknameUpdate, onJoinRoom }) => {
  const [nickname, setNickname] = useState(user.nickname || '');
  const [rooms, setRooms] = useState<Room[]>([]);
  const [newRoomName, setNewRoomName] = useState('');
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:4000');
    setSocket(newSocket);

    // Fetch initial room list
    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/rooms');
        if (response.ok) {
          const roomData = await response.json();
          setRooms(roomData);
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };

    fetchRooms();

    newSocket.on('roomListUpdate', (updatedRooms: Room[]) => {
      setRooms(updatedRooms);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSaveNickname = () => {
    onNicknameUpdate(nickname);
  };

  const handleCreateRoom = () => {
    if (socket && newRoomName.trim()) {
      socket.emit('createRoom', { name: newRoomName });
      setNewRoomName('');
    }
  };

  if (!user.isGuest && !user.nickname) {
    return (
      <div>
        <h1>Set Your Nickname</h1>
        <p>Welcome, {user.displayName}! Please set a nickname to continue.</p>
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter your nickname"
        />
        <button onClick={handleSaveNickname}>Save Nickname</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Gomoku Lobby</h1>
      <p>Welcome, {user.nickname}!</p>
      
      <div>
        <h2>Create a New Room</h2>
        <input
          type="text"
          value={newRoomName}
          onChange={(e) => setNewRoomName(e.target.value)}
          placeholder="Enter room name"
        />
        <button onClick={handleCreateRoom}>Create Room</button>
      </div>

      <div>
        <h2>Available Rooms</h2>
        {rooms.length === 0 ? (
          <p>No rooms available. Create one!</p>
        ) : (
          <ul>
            {rooms.map((room) => (
              <li key={room.id}>
                {room.name} <button onClick={() => onJoinRoom(room.id)}>Join</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Lobby;
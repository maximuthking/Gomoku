import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface GameRoomProps {
  roomId: string;
  user: { nickname: string };
  onLeave: () => void;
}

const GameRoom: React.FC<GameRoomProps> = ({ roomId, user, onLeave }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    const newSocket = io('http://localhost:4000');
    setSocket(newSocket);

    newSocket.emit('joinRoom', roomId);

    newSocket.on('userJoined', (message: string) => {
      setMessages((prev) => [...prev, message]);
    });

    newSocket.on('userLeft', (message: string) => {
      setMessages((prev) => [...prev, message]);
    });

    newSocket.on('chatMessage', (message: string) => {
      setMessages((prev) => [...prev, message]);
    });

    return () => {
      newSocket.emit('leaveRoom', roomId);
      newSocket.disconnect();
    };
  }, [roomId]);

  const sendMessage = () => {
    if (socket && newMessage.trim()) {
      socket.emit('chatMessage', { roomId, message: `${user.nickname}: ${newMessage}` });
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Game Room: {roomId}</h1>
      <div className="chat-box">
        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index}>{msg}</div>
          ))}
        </div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      {/* Game board will go here */}
      <button onClick={onLeave}>Leave Room</button>
    </div>
  );
};

export default GameRoom;

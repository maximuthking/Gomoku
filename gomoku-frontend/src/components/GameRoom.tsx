import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import Board from './Board';
import { GameState, PlayerColor, PublicUser } from '@gomoku/common/types';

interface GameRoomProps {
  roomId: string;
  user: PublicUser;
  onLeave: () => void;
}

const GameRoom: React.FC<GameRoomProps> = ({ roomId, user, onLeave }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<{ userId: string, message: string }[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [playerColor, setPlayerColor] = useState<PlayerColor | null>(null);

  useEffect(() => {
    // Connect with userId to map socket id on the backend
    const newSocket = io('http://localhost:4000', { query: { userId: user.id } });
    setSocket(newSocket);

    // Request the full game state upon joining
    newSocket.emit('joinRoom', roomId);

    newSocket.on('gameStart', (initialGameState: GameState) => {
        setGameState(initialGameState);
    });

    newSocket.on('updateGame', (newGameState: GameState) => {
      setGameState(newGameState);
      if (newGameState.players.black?.id === user.id) {
        setPlayerColor('black');
      } else if (newGameState.players.white?.id === user.id) {
        setPlayerColor('white');
      }
    });

    newSocket.on('chatMessage', (message: { userId: string, message: string }) => {
      setMessages((prev) => [...prev, message]);
    });

    newSocket.on('playerForfeited', (message: string) => {
        setMessages((prev) => [...prev, { userId: 'System', message }]);
    });

    newSocket.on('gameOver', ({ message }: { message: string }) => {
        setMessages((prev) => [...prev, { userId: 'System', message }]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [roomId, user.id]);

  const sendMessage = () => {
    if (socket && newMessage.trim()) {
      socket.emit('chatMessage', { roomId, message: newMessage });
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Game Room: {roomId}</h1>
      {playerColor && <h2>You are playing as {playerColor}</h2>}
      {gameState?.winner ? (
        <h2>Winner: {gameState.winner.nickname}</h2>
      ) : (
        <h2>Current Turn: {gameState?.currentPlayer.nickname}</h2>
      )}
      <div className="game-container">
        {gameState && (
          <Board 
            board={gameState.board} 
            playerColor={playerColor}
            socket={socket} 
            roomId={roomId} 
            winner={gameState.winner}
          />
        )}
        <div className="chat-box">
          <div className="messages">
            {messages.map((msg, index) => (
              <div key={index}><strong>{msg.userId === 'System' ? '[SYSTEM]' : msg.userId}:</strong> {msg.message}</div>
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
      </div>
      <button onClick={onLeave}>Leave Room</button>
    </div>
  );
};

export default GameRoom;
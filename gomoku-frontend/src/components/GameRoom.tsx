import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import Board from './Board';

interface GameRoomProps {
  roomId: string;
  user: { id: string, nickname: string };
  onLeave: () => void;
}

type Player = 'black' | 'white';

interface GameState {
  board: (Player | null)[][];
  players: { 
    black: { id: string, socketId: string } | null;
    white: { id: string, socketId: string } | null;
  };
  currentPlayer: Player;
  winner: Player | null;
}

const GameRoom: React.FC<GameRoomProps> = ({ roomId, user, onLeave }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [playerColor, setPlayerColor] = useState<Player | null>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:4000');
    setSocket(newSocket);

    newSocket.emit('joinRoom', roomId);
    // Assuming user.id is available and correct
    if(user.id) {
      newSocket.emit('playerReady', { roomId, userId: user.id });
    }

    newSocket.on('userJoined', (message: string) => {
      setMessages((prev) => [...prev, message]);
    });

    newSocket.on('playerDisconnected', (message: string) => {
      setMessages((prev) => [...prev, `Notice: ${message}`]);
    });

    newSocket.on('chatMessage', (message: string) => {
      setMessages((prev) => [...prev, message]);
    });

    newSocket.on('updateGame', (newGameState: GameState) => {
      setGameState(newGameState);
      if (newGameState.players.black?.id === user.id) {
        setPlayerColor('black');
      } else if (newGameState.players.white?.id === user.id) {
        setPlayerColor('white');
      }
    });

    return () => {
      newSocket.disconnect();
    };
  }, [roomId, user.id]);

  const sendMessage = () => {
    if (socket && newMessage.trim()) {
      socket.emit('chatMessage', { roomId, message: `${user.nickname}: ${newMessage}` });
      setNewMessage('');
    }
  };

  return (
    <div>
      <h1>Game Room: {roomId}</h1>
      {playerColor && <h2>You are playing as {playerColor}</h2>}
      {gameState?.winner ? (
        <h2>Winner: {gameState.winner}</h2>
      ) : (
        <h2>Current Turn: {gameState?.currentPlayer}</h2>
      )}
      <div className="game-container">
        {gameState && (
          <Board 
            board={gameState.board} 
            currentPlayer={gameState.currentPlayer}
            playerColor={playerColor}
            socket={socket} 
            roomId={roomId} 
            winner={gameState.winner}
          />
        )}
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
      </div>
      <button onClick={onLeave}>Leave Room</button>
    </div>
  );
};

export default GameRoom;

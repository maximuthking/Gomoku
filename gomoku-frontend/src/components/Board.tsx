import React, { useRef, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import { PlayerColor } from '@gomoku/common/types';
import './Board.css';

// --- Constants ---
const BOARD_SIZE = 15;
const CELL_SIZE = 32;
const PADDING = CELL_SIZE / 2;
const GRID_SIZE = (BOARD_SIZE - 1) * CELL_SIZE;
const CANVAS_SIZE = GRID_SIZE + 2 * PADDING;
const STONE_RADIUS = (CELL_SIZE / 2) * 0.85;

interface BoardProps {
  board: (PlayerColor | null)[][];
  playerColor: PlayerColor | null;
  socket: Socket | null;
  roomId: string;
  winner: { id: string, nickname: string } | null;
}

const Board: React.FC<BoardProps> = ({ board, playerColor, socket, roomId, winner }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.fillStyle = '#e3b778';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    ctx.strokeStyle = '#6b4b2b';
    ctx.lineWidth = 1;
    for (let i = 0; i < BOARD_SIZE; i++) {
      const pos = PADDING + i * CELL_SIZE;
      ctx.beginPath();
      ctx.moveTo(pos, PADDING);
      ctx.lineTo(pos, CANVAS_SIZE - PADDING);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(PADDING, pos);
      ctx.lineTo(CANVAS_SIZE - PADDING, pos);
      ctx.stroke();
    }

    board.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell) {
          const x = PADDING + c * CELL_SIZE;
          const y = PADDING + r * CELL_SIZE;
          ctx.beginPath();
          ctx.arc(x, y, STONE_RADIUS, 0, 2 * Math.PI);
          const gradient = ctx.createRadialGradient(x - 3, y - 3, 1, x, y, STONE_RADIUS);
          if (cell === 'black') {
            gradient.addColorStop(0, '#555');
            gradient.addColorStop(1, '#111');
          } else {
            gradient.addColorStop(0, '#fff');
            gradient.addColorStop(1, '#ddd');
          }
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });
    });
  }, [board]);

  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (winner || !socket || !playerColor) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const col = Math.round((x - PADDING) / CELL_SIZE);
    const row = Math.round((y - PADDING) / CELL_SIZE);

    if (row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE && !board[row][col]) {
      socket.emit('placeStone', { roomId, row, col });
    }
  };
  
  const getCursor = () => {
    if (winner) return 'not-allowed';
    if (playerColor) return 'pointer';
    return 'default';
  }

  return (
    <div className="board-container">
      <canvas
        ref={canvasRef}
        width={CANVAS_SIZE}
        height={CANVAS_SIZE}
        onClick={handleClick}
        style={{ cursor: getCursor() }}
      />
    </div>
  );
};

export default Board;

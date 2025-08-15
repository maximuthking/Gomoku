import React, { useRef, useEffect } from 'react';
import { Socket } from 'socket.io-client';
import './Board.css';

// --- 상수 정의 ---
const BOARD_SIZE = 15; // 15줄
const CELL_SIZE = 32; // 한 칸의 크기
const PADDING = CELL_SIZE / 2; // 바둑판 가장자리 여백
const GRID_SIZE = (BOARD_SIZE - 1) * CELL_SIZE; // 격자 전체 크기
const CANVAS_SIZE = GRID_SIZE + 2 * PADDING; // 캔버스 전체 크기
const STONE_RADIUS = (CELL_SIZE / 2) * 0.85; // 돌 반지름

type Player = 'black' | 'white';

interface BoardProps {
  board: (Player | null)[][];
  currentPlayer: Player;
  playerColor: Player | null;
  socket: Socket | null;
  roomId: string;
  winner: Player | null;
}

const Board: React.FC<BoardProps> = ({ board, currentPlayer, playerColor, socket, roomId, winner }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // --- 그리기 로직 (board 상태가 바뀔 때마다 다시 그림) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. 바둑판 배경 그리기
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE); // 캔버스 초기화
    ctx.fillStyle = '#e3b778'; // 나무색 배경
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

    // 2. 바둑판 선 그리기
    ctx.strokeStyle = '#6b4b2b';
    ctx.lineWidth = 1;
    for (let i = 0; i < BOARD_SIZE; i++) {
      const pos = PADDING + i * CELL_SIZE;
      // 세로선
      ctx.beginPath();
      ctx.moveTo(pos, PADDING);
      ctx.lineTo(pos, CANVAS_SIZE - PADDING);
      ctx.stroke();
      // 가로선
      ctx.beginPath();
      ctx.moveTo(PADDING, pos);
      ctx.lineTo(CANVAS_SIZE - PADDING, pos);
      ctx.stroke();
    }

    // 3. 돌 그리기
    board.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell) {
          const x = PADDING + c * CELL_SIZE;
          const y = PADDING + r * CELL_SIZE;

          ctx.beginPath();
          ctx.arc(x, y, STONE_RADIUS, 0, 2 * Math.PI);
          
          // 돌에 입체감을 주기 위한 그라데이션 효과
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
  }, [board]); // board 배열이 변경될 때마다 이 효과를 다시 실행

  // --- 클릭 핸들러 ---
  const handleClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (winner || !socket || currentPlayer !== playerColor) {
      return; // 게임 종료, 소켓 없음, 또는 내 턴이 아닐 때
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    // 캔버스 내의 클릭 좌표 얻기
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // 픽셀 좌표를 격자 좌표(row, col)로 변환
    const col = Math.round((x - PADDING) / CELL_SIZE);
    const row = Math.round((y - PADDING) / CELL_SIZE);

    // 유효한 위치인지 확인 후 서버로 이벤트 전송
    if (row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE && !board[row][col]) {
      socket.emit('placeStone', { roomId, row, col });
    }
  };
  
  // 상황에 맞는 마우스 커서 스타일 반환
  const getCursor = () => {
    if (winner) return 'not-allowed';
    if (currentPlayer === playerColor) return 'pointer';
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
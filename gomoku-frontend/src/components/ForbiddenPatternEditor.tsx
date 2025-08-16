
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './ForbiddenPatternEditor.css';
import * as patternClient from '../api/patternClient';

type Pattern = patternClient.Pattern;
type Tool = 'BLACK' | 'WHITE' | 'ANCHOR' | 'ERASER';

const BOARD_SIZE = 15;
const CELL_SIZE = 40;

const initialBoard = () => Array(BOARD_SIZE).fill(0).map(() => Array(BOARD_SIZE).fill(0));

const cropPattern = (board: number[][]): { pattern: number[][], success: boolean } => {
    let minRow = BOARD_SIZE, minCol = BOARD_SIZE, maxRow = -1, maxCol = -1;
    let anchorFound = false;
    board.forEach((row, rIdx) => {
        row.forEach((cell, cIdx) => {
            if (cell > 0) {
                minRow = Math.min(minRow, rIdx);
                minCol = Math.min(minCol, cIdx);
                maxRow = Math.max(maxRow, rIdx);
                maxCol = Math.max(maxCol, cIdx);
                if (cell === 2) anchorFound = true;
            }
        });
    });

    if (!anchorFound) {
        alert('패턴에 기준점(금수 위치)이 없습니다. 기준점을 설정해주세요.');
        return { pattern: [], success: false };
    }
    if (maxRow === -1) {
        alert('패턴이 비어있습니다. 돌을 놓아주세요.');
        return { pattern: [], success: false };
    }

    const cropped = board.slice(minRow, maxRow + 1).map(row => row.slice(minCol, maxCol + 1));
    return { pattern: cropped, success: true };
};

const ForbiddenPatternEditor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const [board, setBoard] = useState<number[][]>(initialBoard);
  const [activeTool, setActiveTool] = useState<Tool>('BLACK');

  const [patternBaseName, setPatternBaseName] = useState('3-3');
  const [patternSubName, setPatternSubName] = useState('');
  const [patternDescription, setPatternDescription] = useState('');
  const [isRotatable, setIsRotatable] = useState(true);
  const [isFlippable, setIsFlippable] = useState(true);
  const [editingPatternId, setEditingPatternId] = useState<string | null>(null);

  const fetchAndSetPatterns = useCallback(async () => {
    try {
      const fetchedPatterns = await patternClient.getPatterns();
      setPatterns(fetchedPatterns);
    } catch (error) {
      console.error("Failed to fetch patterns:", error);
      alert('패턴 목록을 불러오는 데 실패했습니다.');
    }
  }, []);

  useEffect(() => {
    fetchAndSetPatterns();
  }, [fetchAndSetPatterns]);

  const drawBoard = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    for (let i = 0; i < BOARD_SIZE; i++) {
      ctx.beginPath();
      ctx.moveTo(CELL_SIZE / 2 + i * CELL_SIZE, CELL_SIZE / 2);
      ctx.lineTo(CELL_SIZE / 2 + i * CELL_SIZE, canvas.height - CELL_SIZE / 2);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(CELL_SIZE / 2, CELL_SIZE / 2 + i * CELL_SIZE);
      ctx.lineTo(canvas.width - CELL_SIZE / 2, CELL_SIZE / 2 + i * CELL_SIZE);
      ctx.stroke();
    }

    for (let row = 0; row < BOARD_SIZE; row++) {
      for (let col = 0; col < BOARD_SIZE; col++) {
        const stone = board[row][col];
        if (stone === 0) continue;
        const x = CELL_SIZE / 2 + col * CELL_SIZE;
        const y = CELL_SIZE / 2 + row * CELL_SIZE;
        const radius = CELL_SIZE / 2 - 4;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        if (stone === 1 || stone === 2) {
          ctx.fillStyle = 'black';
          ctx.fill();
        } else if (stone === 3) {
          ctx.fillStyle = 'white';
          ctx.fill();
          ctx.strokeStyle = 'black';
          ctx.stroke();
        }
        if (stone === 2) {
          ctx.strokeStyle = 'red';
          ctx.lineWidth = 3;
          ctx.stroke();
        }
      }
    }
  }, [board]);

  useEffect(() => {
    drawBoard();
  }, [drawBoard]);

  const handleCanvasClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const col = Math.floor(x / CELL_SIZE);
    const row = Math.floor(y / CELL_SIZE);
    if (row >= BOARD_SIZE || col >= BOARD_SIZE) return;

    const newBoard = board.map(arr => arr.slice());
    let newStoneValue = 0;
    switch (activeTool) {
      case 'BLACK': newStoneValue = 1; break;
      case 'ANCHOR':
        newBoard.forEach((r, rIdx) => r.forEach((c, cIdx) => {
          if (c === 2) newBoard[rIdx][cIdx] = 1;
        }));
        newStoneValue = 2;
        break;
      case 'WHITE': newStoneValue = 3; break;
      case 'ERASER': newStoneValue = 0; break;
    }
    newBoard[row][col] = newBoard[row][col] === newStoneValue ? 0 : newStoneValue;
    setBoard(newBoard);
  };

  const handleNewPattern = () => {
    setBoard(initialBoard());
    setPatternBaseName('3-3');
    setPatternSubName('');
    setPatternDescription('');
    setIsRotatable(true);
    setIsFlippable(true);
    setEditingPatternId(null);
  };

  const handleSave = async () => {
    const combinedName = `${patternBaseName}${patternSubName ? ` (${patternSubName})` : ''}`;
    if (!combinedName) {
        alert('패턴 이름을 입력해주세요.');
        return;
    }
    const { pattern: cropped, success } = cropPattern(board);
    if (!success) return;

    const payload = {
        name: combinedName,
        description: patternDescription,
        isRotatable: isRotatable,
        isFlippable: isFlippable,
        pattern: cropped
    };

    try {
        if (editingPatternId) {
            await patternClient.updatePattern(editingPatternId, payload);
        } else {
            await patternClient.createPattern(payload);
        }
        alert('패턴이 저장되었습니다.');
        handleNewPattern();
        fetchAndSetPatterns();
    } catch (error) {
        console.error("Failed to save pattern:", error);
        alert('패턴 저장에 실패했습니다.');
    }
  };

  const handleLoadPattern = (pattern: Pattern) => {
    const newBoard = initialBoard();
    const startRow = Math.floor((BOARD_SIZE - pattern.pattern.length) / 2);
    const startCol = Math.floor((BOARD_SIZE - (pattern.pattern[0]?.length || 0)) / 2);

    pattern.pattern.forEach((row, rIdx) => {
        row.forEach((cell, cIdx) => {
            if (startRow + rIdx < BOARD_SIZE && startCol + cIdx < BOARD_SIZE) {
                newBoard[startRow + rIdx][startCol + cIdx] = cell;
            }
        });
    });

    setBoard(newBoard);
    
    const nameMatch = pattern.name.match(/^(3-3|4-4|기타)(?: \((.*)\))?$/);
    if (nameMatch) {
        setPatternBaseName(nameMatch[1]);
        setPatternSubName(nameMatch[2] || '');
    } else {
        setPatternBaseName('기타');
        setPatternSubName(pattern.name);
    }

    setPatternDescription(pattern.description);
    setIsRotatable(pattern.isRotatable);
    setIsFlippable(pattern.isFlippable);
    setEditingPatternId(pattern.id);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('정말로 이 패턴을 삭제하시겠습니까?')) {
        try {
            await patternClient.deletePattern(id);
            alert('패턴이 삭제되었습니다.');
            if (editingPatternId === id) {
                handleNewPattern();
            }
            fetchAndSetPatterns();
        } catch (error) {
            console.error("Failed to delete pattern:", error);
            alert('패턴 삭제에 실패했습니다.');
        }
    }
  };

  return (
    <div className="editor-layout">
      <div className="tools-panel">
        <h2>도구 패널</h2>
        <div className="tool-selection">
          <button onClick={() => setActiveTool('BLACK')} className={activeTool === 'BLACK' ? 'active' : ''}>흑돌</button>
          <button onClick={() => setActiveTool('WHITE')} className={activeTool === 'WHITE' ? 'active' : ''}>백돌</button>
          <button onClick={() => setActiveTool('ANCHOR')} className={activeTool === 'ANCHOR' ? 'active' : ''}>기준점(금수)</button>
          <button onClick={() => setActiveTool('ERASER')} className={activeTool === 'ERASER' ? 'active' : ''}>지우개</button>
        </div>
        <hr />
        <div className="metadata-editor">
            <h3>패턴 정보</h3>
            <label>이름</label>
            <div className="pattern-name-editor">
              <select value={patternBaseName} onChange={e => setPatternBaseName(e.target.value)}>
                <option value="3-3">3-3</option>
                <option value="4-4">4-4</option>
                <option value="기타">기타</option>
              </select>
              <input type="text" value={patternSubName} onChange={e => setPatternSubName(e.target.value)} placeholder="(예: 기본형)" />
            </div>
            <label>설명</label>
            <textarea value={patternDescription} onChange={e => setPatternDescription(e.target.value)} placeholder="패턴에 대한 상세 설명" />
            <div className="checkbox-wrapper">
                <input type="checkbox" id="isRotatable" checked={isRotatable} onChange={e => setIsRotatable(e.target.checked)} />
                <label htmlFor="isRotatable">회전하여 모든 방향에 적용</label>
            </div>
            <div className="checkbox-wrapper">
                <input type="checkbox" id="isFlippable" checked={isFlippable} onChange={e => setIsFlippable(e.target.checked)} />
                <label htmlFor="isFlippable">좌우/상하 반전하여 적용</label>
            </div>
        </div>
        <hr />
        <div className="action-buttons">
            <button onClick={handleNewPattern}>새 패턴 만들기</button>
            <button onClick={handleSave} className="save-button">{editingPatternId ? '수정 사항 저장' : '새 패턴으로 저장'}</button>
        </div>
      </div>
      <div className="editor-main">
        <h2>패턴 편집기</h2>
        <canvas
          ref={canvasRef}
          width={CELL_SIZE * BOARD_SIZE}
          height={CELL_SIZE * BOARD_SIZE}
          className="board"
          onClick={handleCanvasClick}
        />
      </div>
      <div className="pattern-list">
        <h2>패턴 목록</h2>
        <ul>
          {patterns.map(p => (
            <li key={p.id} onClick={() => handleLoadPattern(p)} className={editingPatternId === p.id ? 'active' : ''}>
              <span className="pattern-name">{p.name}</span>
              <button className="delete-button" onClick={(e) => { e.stopPropagation(); handleDelete(p.id); }}>삭제</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ForbiddenPatternEditor;

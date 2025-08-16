import { checkWin, PlayerColor } from './gameService';

describe('checkWin', () => {
  const createEmptyBoard = (): (PlayerColor | null)[][] =>
    Array(15).fill(null).map(() => Array(15).fill(null));

  // Test for horizontal win
  test('should detect a horizontal win', () => {
    const board = createEmptyBoard();
    for (let i = 0; i < 5; i++) {
      board[7][5 + i] = 'black';
    }
    expect(checkWin(board, 7, 5)).toBe(true);
    expect(checkWin(board, 7, 9)).toBe(true);
  });

  // Test for vertical win
  test('should detect a vertical win', () => {
    const board = createEmptyBoard();
    for (let i = 0; i < 5; i++) {
      board[5 + i][7] = 'white';
    }
    expect(checkWin(board, 5, 7)).toBe(true);
    expect(checkWin(board, 9, 7)).toBe(true);
  });

  // Test for diagonal win (top-left to bottom-right)
  test('should detect a diagonal win (\\)', () => {
    const board = createEmptyBoard();
    for (let i = 0; i < 5; i++) {
      board[5 + i][5 + i] = 'black';
    }
    expect(checkWin(board, 5, 5)).toBe(true);
    expect(checkWin(board, 9, 9)).toBe(true);
  });

  // Test for diagonal win (bottom-left to top-right)
  test('should detect a diagonal win (/)', () => {
    const board = createEmptyBoard();
    for (let i = 0; i < 5; i++) {
      board[9 - i][5 + i] = 'white';
    }
    expect(checkWin(board, 9, 5)).toBe(true);
    expect(checkWin(board, 5, 9)).toBe(true);
  });

  // Test for no win
  test('should return false when there is no win', () => {
    const board = createEmptyBoard();
    board[7][7] = 'black';
    board[7][8] = 'black';
    board[7][9] = 'black';
    board[7][10] = 'black'; // Only 4 in a row
    expect(checkWin(board, 7, 7)).toBe(false);
  });

  // Test on an empty board
  test('should return false for a move on an empty board', () => {
    const board = createEmptyBoard();
    board[7][7] = 'black';
    expect(checkWin(board, 7, 7)).toBe(false);
  });

  // Test with opponent's stones breaking the line
  test('should return false if the line is broken by an opponent', () => {
    const board = createEmptyBoard();
    board[7][5] = 'black';
    board[7][6] = 'black';
    board[7][7] = 'white'; // Blocker
    board[7][8] = 'black';
    board[7][9] = 'black';
    expect(checkWin(board, 7, 5)).toBe(false);
  });
});

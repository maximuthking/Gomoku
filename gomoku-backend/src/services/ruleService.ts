import { getAllPatterns } from './patternService';
import { PlayerColor, Pattern } from '@gomoku/common';

// --- Matrix Transformation Utilities ---

/**
 * Rotates a 2D matrix 90 degrees clockwise.
 */
function rotate(matrix: number[][]): number[][] {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rotated = Array(cols).fill(0).map(() => Array(rows).fill(0));
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      rotated[c][rows - 1 - r] = matrix[r][c];
    }
  }
  return rotated;
}

/**
 * Flips a 2D matrix horizontally.
 */
function flip(matrix: number[][]): number[][] {
  return matrix.map(row => row.slice().reverse());
}

/**
 * Generates all unique variations of a pattern based on its properties.
 * This includes rotations and flips.
 */
function generatePatternVariations(pattern: Pattern): number[][][] {
  const variations = new Set<string>();
  const baseMatrices: number[][][] = [pattern.pattern];

  if (pattern.isFlippable) {
    baseMatrices.push(flip(pattern.pattern));
  }

  for (let matrix of baseMatrices) {
    let current = matrix;
    for (let i = 0; i < 4; i++) {
      if (pattern.isRotatable || i === 0) {
        variations.add(JSON.stringify(current));
        current = rotate(current);
      } else {
        break; // No need to rotate if not rotatable
      }
    }
  }

  return Array.from(variations).map(s => JSON.parse(s));
}

// --- Main Forbidden Move Logic ---

/**
 * Checks if a move at the given coordinates is forbidden for the player.
 * @param board The current game board.
 * @param row The row of the move to check.
 * @param col The column of the move to check.
 * @param player The player making the move (only black can have forbidden moves).
 * @returns {Promise<boolean>} True if the move is forbidden, false otherwise.
 */
export async function isMoveForbidden(
  board: (PlayerColor | null)[][],
  row: number,
  col: number,
  player: PlayerColor
): Promise<boolean> {
  // Forbidden moves only apply to the black player in Renju rules.
  if (player !== 'black') {
    return false;
  }

  const allPatterns = await getAllPatterns();
  const tempBoard = board.map(r => r.slice());
  tempBoard[row][col] = player;

  for (const pattern of allPatterns) {
    const variations = generatePatternVariations(pattern);

    for (const variation of variations) {
      let anchorRow = -1, anchorCol = -1;
      // Find the anchor point (2) in the pattern variation
      for(let r = 0; r < variation.length; r++) {
        for (let c = 0; c < variation[0].length; c++) {
          if (variation[r][c] === 2) {
            anchorRow = r;
            anchorCol = c;
            break;
          }
        }
        if (anchorRow !== -1) break;
      }

      if (anchorRow === -1) continue; // Should not happen if patterns are valid

      // Calculate the top-left corner of the pattern on the main board
      const startRow = row - anchorRow;
      const startCol = col - anchorCol;

      if (checkPatternMatch(tempBoard, variation, startRow, startCol)) {
        console.log(`Forbidden move detected for black at (${row}, ${col}) matching pattern: ${pattern.name}`);
        return true; // Forbidden move found
      }
    }
  }

  return false; // No forbidden moves found
}

/**
 * Checks if a given pattern matrix matches the board at a specific location.
 */
function checkPatternMatch(
  board: (PlayerColor | null)[][],
  pattern: number[][],
  startRow: number,
  startCol: number
): boolean {
  const patternRows = pattern.length;
  const patternCols = pattern[0].length;

  for (let r = 0; r < patternRows; r++) {
    for (let c = 0; c < patternCols; c++) {
      const boardRow = startRow + r;
      const boardCol = startCol + c;

      // Check if the pattern is out of the board bounds
      if (boardRow < 0 || boardRow >= 15 || boardCol < 0 || boardCol >= 15) {
        // If the pattern cell is not empty, it's a mismatch
        if (pattern[r][c] !== 0) return false;
        continue;
      }

      const boardCell = board[boardRow][boardCol];
      const patternCell = pattern[r][c];

      // 1: Black, 2: Anchor (Black), 3: White
      if (patternCell === 1 || patternCell === 2) {
        if (boardCell !== 'black') return false;
      } else if (patternCell === 3) {
        if (boardCell !== 'white') return false;
      } else { // patternCell is 0 (empty)
        if (boardCell !== null) return false;
      }
    }
  }

  return true; // The entire pattern matches
}

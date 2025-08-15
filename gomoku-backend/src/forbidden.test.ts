// 이 파일은 렌주룰 금수 로직을 테스트하기 위한 것입니다.
// `ts-node forbidden.test.ts`로 실행할 수 있습니다.

// 필요한 함수들을 가져옵니다.
// 참고: `index.ts`에서 함수들을 export해야 합니다.
// 이 테스트를 위해 `isForbidden` 및 관련 함수들을 export 처리해야 합니다.
import { isForbidden } from './index';

// 테스트용 보드 생성 함수
function createBoard(size: number): (string | null)[][] {
  return Array(size).fill(null).map(() => Array(size).fill(null));
}

// 테스트 케이스
function runTests() {
  console.log('금수 로직 테스트 시작...');

  let board = createBoard(15);
  let result;

  // 테스트 1: 3-3 금수
  console.log('테스트 1: 3-3 금수');
  board[5][5] = 'black';
  board[5][6] = 'black';
  board[6][5] = 'black';
  board[7][5] = 'black';
  // . . . . .
  // . X X . .  (5,5), (5,6)
  // . X . . .  (6,5)
  // . X . . .  (7,5)
  // . . . . .
  // (6,6)에 두면 3-3이 됨
  result = isForbidden(board, 6, 6);
  console.assert(result.forbidden === true && result.type === '3-3', '3-3 금수 실패');

  // 테스트 2: 4-4 금수
  console.log('테스트 2: 4-4 금수');
  board = createBoard(15);
  board[5][5] = 'black';
  board[5][6] = 'black';
  board[5][7] = 'black';
  board[6][4] = 'black';
  board[7][4] = 'black';
  board[8][4] = 'black';
  // . . . X . . . (5,4) -> (6,4) (7,4) (8,4)
  // . X X X . . . (5,5) (5,6) (5,7)
  // . . . . . . .
  // (5,4)에 두면 4-4가 됨
  result = isForbidden(board, 5, 4);
  console.assert(result.forbidden === true && result.type === '4-4', '4-4 금수 실패');

  // 테스트 3: 장목(Overline) 금수
  console.log('테스트 3: 장목 금수');
  board = createBoard(15);
  board[5][5] = 'black';
  board[5][6] = 'black';
  board[5][7] = 'black';
  board[5][8] = 'black';
  board[5][9] = 'black';
  // . X X X X X .
  // (5,10)에 두면 6목이 됨
  result = isForbidden(board, 5, 10);
  console.assert(result.forbidden === true && result.type === 'overline', '장목 금수 실패');

  // 테스트 4: 금수가 아닌 경우
  console.log('테스트 4: 금수가 아닌 경우');
  board = createBoard(15);
  board[5][5] = 'black';
  board[6][6] = 'white';
  result = isForbidden(board, 7, 7);
  console.assert(result.forbidden === false, '정상적인 수 실패');

  console.log('테스트 완료.');
}

// 테스트 실행
runTests();

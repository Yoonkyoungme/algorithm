function solution(n) {
  let result = 0;

  function queen(board, row) {
    if (row === n) result++;
    else {
      for (let i = 1; i <= n; i++) {
        board[row + 1] = i;
        if (isValid(board, row + 1)) {
          queen(board, row + 1);
        }
      }
    }
  }

  function isValid(board, row) {
    for (let i = 1; i < row; i++) {
      if (
        board[i] === board[row] ||
        Math.abs(board[i] - board[row]) === Math.abs(i - row)
      )
        return false;
    }
    return true;
  }

  for (let i = 1; i <= n; i++) {
    const board = new Array(n + 1).fill(0);
    board[1] = i;
    queen(board, 1);
  }

  return result;
}
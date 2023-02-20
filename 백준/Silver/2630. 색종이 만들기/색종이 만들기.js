const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const arr = input.map((data) => data.split(" ").map(Number));
let white = (blue = 0);

function divide(col, row, n) {
  if (isSameColor(col, row, n)) {
    arr[col][row] === 0 ? (white += 1) : (blue += 1);
  } else {
    let half = n / 2;
    divide(col, row, half); // 1사분면 시작점
    divide(col, row + half, half); // 2사분면 시작점
    divide(col + half, row, half); // 3사분면 시작점
    divide(col + half, row + half, half); // 4사분면 시작점
  }
}

function isSameColor(col, row, n) {
  let base = arr[col][row]; // 분할된 면의 왼쪽 상단 요소 (임의)
  for (let i = col; i < col + n; i++) {
    for (let j = row; j < row + n; j++) {
      if (base !== arr[i][j]) return false;
    }
  }
  return true;
}

divide(0, 0, N);

console.log(white);
console.log(blue);
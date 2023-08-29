// 문제 12. 발전기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const towns = input.slice(1).map((state) => state.split(" ").map(Number));
const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

function isInRange(x, y) {
  return x >= 0 && x < N && y >= 0 && y < N;
}

let result = 0;

function bfs(x, y) {
  const queue = [];
  queue.push([x, y]);
  towns[x][y] = -1; // 발전기 설치

  while (queue.length > 0) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < dx.length; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (isInRange(nx, ny)) {
        if (towns[nx][ny] === 1) {
          queue.push([nx, ny]);
          towns[nx][ny] = -1;
        }
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (towns[i][j] === -1) {
      continue;
    } else if (towns[i][j] === 1) {
      result++;
      bfs(i, j);
    }
  }
}

console.log(result);

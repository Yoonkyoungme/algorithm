// 문제 20. 연결 요소 제거하기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K, Q] = input[0].split(" ").map(Number);
const matrix = input.slice(1, N + 1).map((row) => [...row]);

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

for (let i = N + 1; i < N + 1 + Q; i++) {
  let [y, x, c] = input[i].split(" ");
  y = Number(y) - 1;
  x = Number(x) - 1;
  matrix[y][x] = c;

  const queue = [[y, x]];
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[y][x] = true;
  const path = [];

  while (queue.length) {
    const [currentY, currentX] = queue.shift();
    path.push([currentY, currentX]);
    for (let j = 0; j < 4; j++) {
      const nextX = currentX + dx[j];
      const nextY = currentY + dy[j];
      if (nextX >= 0 && nextX < N && nextY >= 0 && nextY < N) {
        if (!visited[nextY][nextX] && matrix[nextY][nextX] === c) {
          visited[nextY][nextX] = true;
          queue.push([nextY, nextX]);
        }
      }
    }
  }
  if (path.length >= K) {
    for (const [cy, cx] of path) {
      matrix[cy][cx] = ".";
    }
  }
}

for (const row of matrix) {
  console.log(row.join(""));
}

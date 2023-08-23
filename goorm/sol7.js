// 문제 7. 구름 찾기 깃발

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const map = [];
let result = 0;

const dx = [0, 0, -1, 1, -1, 1, -1, 1];
const dy = [1, -1, 0, 0, 1, 1, -1, -1];

for (let i = 1; i <= N; i++) {
  map.push(input[i].split(" ").map(Number));
}

function countNeighbors(y, x) {
  let count = 0;

  if (map[y][x] === 0) {
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (ny >= 0 && nx >= 0 && ny < N && nx < N && map[ny][nx] === 1) {
        count++;
      }
    }
  }

  return count === K;
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (countNeighbors(y, x)) {
      result++;
    }
  }
}

console.log(result);

// 문제 9. 폭탄 구현하기 (2)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const land = input.slice(1, N + 1).map((col) => col.split(" "));
const score = Array.from({ length: N }, () => Array(N).fill(0));

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

for (let i = 0; i < K; i++) {
  let [y, x] = input[N + 1 + i]
    .split(" ")
    .map(Number)
    .map((num) => num - 1);
  getScore(y, x);

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= N || ny >= N) {
      continue;
    }
    getScore(ny, nx);
  }
}

function getScore(y, x) {
  if (land[y][x] === "0") {
    score[y][x]++;
  } else if (land[y][x] === "@") {
    score[y][x] += 2;
  }
}

const maxScore = Math.max(...score.map((row) => Math.max(...row)));
console.log(maxScore);

// 문제 13. 발전기(2)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const towns = input.slice(1).map((state) => state.split(" ").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const dc = [0, 0, -1, 1];
const dr = [1, -1, 0, 0];
const scoreList = Array(31).fill(0);

function isInRange(nc, nr) {
  return nc >= 0 && nc < N && nr >= 0 && nr < N && !visited[nc][nr];
}

function bfs(c, r) {
  const queue = [];
  queue.push([c, r]);
  visited[c][r] = true;
  let score = 1;

  while (queue.length > 0) {
    const [curC, curR] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nc = curC + dc[i];
      const nr = curR + dr[i];
      if (isInRange(nc, nr) && towns[curC][curR] === towns[nc][nr]) {
        visited[nc][nr] = true;
        queue.push([nc, nr]);
        score++;
      }
    }
  }

  if (score >= K) {
    scoreList[towns[c][r]] += 1;
  }
}

for (let c = 0; c < N; c++) {
  for (let r = 0; r < N; r++) {
    if (!visited[c][r]) {
      bfs(c, r);
    }
  }
}

const maxValue = Math.max(...scoreList);
console.log(scoreList.lastIndexOf(maxValue));

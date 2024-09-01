const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1).map((line) => line.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

let startX, startY;
const dist = Array.from({ length: n }, (_, i) =>
  grid[i].map((cell) => (cell === 0 ? 0 : -1))
);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (grid[i][j] === 2) {
      startX = i;
      startY = j;
    }
  }
}

const queue = [[startX, startY]];
dist[startX][startY] = 0;

while (queue.length > 0) {
  const [x, y] = queue.shift();

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < n && ny < m) {
      if (grid[nx][ny] === 1 && dist[nx][ny] === -1) {
        dist[nx][ny] = dist[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  console.log(dist[i].join(" "));
}

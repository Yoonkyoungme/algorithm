const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const graph = input.map((dataList) => dataList.split("").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

let result = [];
let moving = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    // console.log("좌표", j, i);
    if (graph[j][i] === 1) {
      dfs(j, i);
      result.push(moving);
      moving = 0;
    }
  }
}

function dfs(y, x) {
  graph[y][x] = 0;
  moving += 1;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx >= 0 && ny >= 0 && nx < N && ny < N && graph[ny][nx] === 1) {
      dfs(ny, nx);
    }
  }
}

result.sort((a, b) => a - b);

const arr = [result.length, ...result];
arr.map((data) => console.log(data));

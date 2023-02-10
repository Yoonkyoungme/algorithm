const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = +input.shift();
const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];
let M, N, graph;

for (let i = 0; i < testCase; i++) {
  let result = 0;
  [M, N, K] = input.shift().split(" ").map(Number);
  graph = new Array(N).fill(0).map(() => new Array(M).fill(0));

  // graph에 배추 삽입
  for (let j = 0; j < K; j++) {
    let [cx, cy] = input[j].split(" ").map(Number);
    graph[cy][cx] = 1;
  }
  input.splice(0, K);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 1) {
        dfs(i, j);
        result += 1;
      }
    }
  }

  console.log(result);
}

function isVaild(ny, nx) {
  const vaildResult = ny >= 0 && nx >= 0 && ny < N && nx < M ? true : false;
  return vaildResult;
}

function dfs(y, x) {
  // console.log(y, x);
  graph[y][x] = 0;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    graph[y][x] = 0;
    if (isVaild(ny, nx) && graph[ny][nx] === 1) {
      // console.log("new", ny, nx);
      dfs(ny, nx);
    }
  }
}

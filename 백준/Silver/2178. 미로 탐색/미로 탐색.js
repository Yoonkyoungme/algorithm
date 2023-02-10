const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = input
  .slice(1, input.length)
  .map((dataList) => dataList.split("").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, -1, 1];

function isValid(ny, nx) {
  const vaildResult = nx >= 0 && ny >= 0 && nx < M && ny < N ? true : false;
  return vaildResult;
}

function bfs(y, x) {
  const queue = [[y, x]];
  graph[y][x] = 1;

  while (queue.length) {
    let [y, x] = queue.pop();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (isValid(ny, nx) && graph[ny][nx] === 1) {
        queue.unshift([ny, nx]);
        graph[ny][nx] = graph[y][x] + 1;
      }
    }
  }
  return graph[N - 1][M - 1];
}

const result = bfs(0, 0);
console.log(result);

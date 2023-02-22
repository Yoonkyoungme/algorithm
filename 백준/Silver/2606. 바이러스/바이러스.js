const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const C = +input.shift();
const S = +input.shift();
const data = input.map((data) => data.split(" ").map(Number));
const graph = new Array(C + 1).fill(0).map(() => new Array(C + 1).fill(0));
const visited = new Array(C + 1).fill(false);

data.forEach((data) => {
  const [i, j] = data;
  graph[i][j] = 1;
  graph[j][i] = 1;
});

// console.log(graph);
let result = 0;

function dfs(now) {
  visited[now] = true;
  for (let next = 1; next < C + 1; next++) {
    if (!visited[next] && graph[now][next] === 1) {
      dfs(next);
      result += 1;
    }
  }
}

dfs(1);

console.log(result);

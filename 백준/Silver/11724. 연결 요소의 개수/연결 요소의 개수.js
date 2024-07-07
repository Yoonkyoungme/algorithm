const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

const visited = Array(N + 1).fill(false);
let result = 0;

function dfs(node) {
  visited[node] = true;
  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

for (let node = 1; node <= N; node++) {
  if (!visited[node]) {
    dfs(node);
    result++;
  }
}

console.log(result);

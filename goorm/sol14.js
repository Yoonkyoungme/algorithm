// 문제 14. 작은 노드

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, K] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
graph.forEach((arr) => arr.sort((a, b) => a - b));

let cur = K;
let result = 1;
visited[K] = true;

while (true) {
  let next = null;
  for (const neighbor of graph[cur]) {
    if (!visited[neighbor]) {
      result++;
      visited[neighbor] = true;
      cur = neighbor;
      next = neighbor;
      break;
    }
  }

  if (next === null) {
    break;
  }
}
console.log(result, cur);

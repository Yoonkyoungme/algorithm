const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const [N, M, V] = input[0].split(" ").map(Number);

const edges = input.slice(1).map((line) => line.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);

for (const [a, b] of edges) {
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

function dfs(v, visited) {
  const stack = [v];
  const result = [];

  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      result.push(node);
      for (let i = graph[node].length - 1; i >= 0; i--) {
        const neighbor = graph[node][i];
        if (!visited[neighbor]) {
          stack.push(neighbor);
        }
      }
    }
  }
  return result;
}

function bfs(v, visited) {
  const queue = [v];
  const result = [];
  visited[v] = true;

  while (queue.length) {
    const node = queue.shift();
    result.push(node);
    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        queue.push(neighbor);
      }
    }
  }
  return result;
}

const dVisited = Array.from({ length: N + 1 }, () => false);
const bVisited = Array.from({ length: N + 1 }, () => false);

console.log(dfs(V, dVisited).join(" "));
console.log(bfs(V, bVisited).join(" "));

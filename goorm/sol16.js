// 문제 16. 연합

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const check = Array.from({ length: N + 1 }, () => Array(N + 1).fill(false)); // 간선의 존재 여부
const visited = Array(N + 1).fill(false); // 방문 여부

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  graph[start].push(end);
  check[start][end] = true;
}

let result = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    result++;
    const queue = [i];
    while (queue.length > 0) {
      const currentNode = queue.shift();
      visited[currentNode] = true;

      for (const nextNode of graph[currentNode]) {
        if (!visited[nextNode] && check[nextNode][currentNode]) {
          queue.push(nextNode);
        }
      }
    }
  }
}

console.log(result);

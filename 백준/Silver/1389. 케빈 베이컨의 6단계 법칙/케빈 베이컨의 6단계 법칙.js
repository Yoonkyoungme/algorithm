const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const bacon = new Array(N + 1).fill(0);
const graph = new Array(N + 1).fill([]).map(() => []);

input.forEach((data) => {
  const [start, end] = data.split(" ").map(Number);
  graph[start].push(end);
  graph[end].push(start);
});

function bfs(start) {
  const visited = new Array(N + 1).fill(false);
  const queue = [[start, 0]];

  while (queue.length) {
    let [node, count] = queue.pop();
    if (!visited[node]) {
      visited[node] = true;
      bacon[start] += count++;
      graph[node].forEach((data) => queue.unshift([data, count]));
    }
  }
}

for (let i = 1; i <= N; i++) {
  bfs(i);
}

bacon.shift();
console.log(bacon.indexOf(Math.min(...bacon)) + 1);

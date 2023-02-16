const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [V, E] = input.shift().split(" ").map(Number);
const graph = input.map((data) => data.split(" ").map(Number));
const dist = Array.from(Array(V), () => Array(V).fill(Infinity));

for (let i = 0; i < V; i++) {
  dist[i][i] = 0;
}

graph.forEach((data) => {
  [s, e, cost] = data;
  if (dist[s - 1][e - 1] > cost) dist[s - 1][e - 1] = cost;
});

for (let k = 0; k < V; k++) {
  for (let i = 0; i < V; i++) {
    for (let j = 0; j < V; j++)
      dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
  }
}
console.log(dist);

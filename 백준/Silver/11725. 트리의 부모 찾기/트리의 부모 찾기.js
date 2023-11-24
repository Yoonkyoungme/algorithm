const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const edges = input.slice(1).map((line) => line.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
const checked = Array.from({ length: N + 1 }).fill(false);
const parentNodes = Array.from({ length: N + 1 }).fill(null);

edges.forEach((edges) => {
  const [start, end] = edges;
  graph[start].push(end);
  graph[end].push(start);
});

const findParent = (vertex) => {
  if (checked[vertex]) return;

  checked[vertex] = true;

  graph[vertex].forEach((edge) => {
    if (!checked[edge]) {
      parentNodes[edge] = vertex;
    }

    findParent(edge);
  });
};

findParent(1);
console.log(parentNodes.slice(2).join("\n"));

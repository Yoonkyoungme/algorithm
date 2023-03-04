const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = input.map((data) => data.split(" ").map(Number));
graph.sort((a, b) => a[2] - b[2]);

const parents = [];
for (let i = 0; i < N; i++) {
  parents.push(i);
}

function getParent(x) {
  if (parents[x] === x) return x;
  return (parents[x] = getParent(parents[x]));
}

function union(x, y) {
  const n1 = getParent(x);
  const n2 = getParent(y);

  if (n1 === n2) return false;
  n1 < n2 ? (parents[n2] = n1) : (parents[n1] = n2);
  return true;
}

let link = 0;
let end = 0;

graph.forEach((data, index) => {
  const [node1, node2, cost] = data;
  if (union(node1, node2)) {
    link += cost;
    end = cost;
  }
});

console.log(link - end);

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const M = +input.shift();
const arrive = input.pop().split(" ").map(Number);
const graph = input.map((data) => data.split(" ").map(Number));

const dist = new Array(N + 1).fill(Infinity);
const lines = Array.from(Array(N + 1), () => []);
graph.forEach((value) => {
  let [a, b, c] = value;
  lines[a].push({ to: b, cost: c });
});

const queue = [{ to: arrive[0], cost: 0 }];
dist[arrive[0]] = 0;

while (queue.length) {
  const { to } = queue.pop();
  lines[to].forEach((next) => {
    const acc = dist[to] + next.cost;

    if (dist[next.to] > acc) {
      dist[next.to] = acc;
      queue.push(next);
    }
  });
}

console.log(dist[arrive[1]]);

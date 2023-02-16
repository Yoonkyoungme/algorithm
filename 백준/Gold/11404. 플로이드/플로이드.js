const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const M = +input.shift();
const graph = input.map((data) => data.split(" ").map(Number));

// 전부 무한대에서 시작
const dist = Array.from(Array(N), () => Array(N).fill(Infinity));

// 자기 자신으로 가는 비용은 0
for (let i = 0; i < N; i++) {
  dist[i][i] = 0;
}

graph.forEach((data) => {
  const [s, e, cost] = data;

  if (dist[s - 1][e - 1] > cost) dist[s - 1][e - 1] = cost;
});

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (dist[i][k] === Infinity || dist[k][j] === Infinity) {
        continue;
      }

      dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (dist[i][j] === Infinity) dist[i][j] = 0;
  }
}

console.log(dist.map((data) => data.join(" ")).join("\n"));

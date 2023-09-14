// 문제 19. 대체 경로

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, S, E] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [s, e] = input[i].split(" ").map(Number);
  graph[s].push(e);
  graph[e].push(s);
}

for (let off = 1; off <= N; off++) {
  if (off === S || off === E) {
    console.log(-1);
  } else {
    const visited = new Array(N + 1).fill(Infinity);
    const q = [S];
    visited[S] = 1;
    while (q.length > 0) {
      const curNode = q.shift();
      for (const nextNode of graph[curNode]) {
        if (nextNode !== off) {
          if (visited[nextNode] > visited[curNode] + 1) {
            visited[nextNode] = visited[curNode] + 1;
            q.push(nextNode);
          } else if (nextNode === E) {
            break;
          }
        }
      }
    }
    console.log(visited[E] === Infinity ? -1 : visited[E]);
  }
}

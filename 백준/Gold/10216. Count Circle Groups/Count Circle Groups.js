const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = +input.shift();
let N;

for (let i = 0; i < testCase; i++) {
  let result = 0;
  N = +input.shift();
  const visited = new Array(N).fill(false);
  let graph = input.slice(0, N).map((data) => data.split(" ").map(Number));
  input.splice(0, N);

  // 두 변 사이의 거리 계산
  function cal(line1, line2) {
    return Math.sqrt((line1[0] - line2[0]) ** 2 + (line1[1] - line2[1]) ** 2);
  }

  function dfs(cur) {
    for (let next = 0; next < N; next++) {
      if (cur !== next && !visited[next]) {
        if (cal(graph[cur], graph[next]) <= graph[cur][2] + graph[next][2]) {
          visited[next] = true;
          dfs(next);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      dfs(i);
      result += 1;
    }
  }
  console.log(result);
}

function solution(n, s, a, b, fares) {
  const graph = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Infinity)
  );

  for (let i = 1; i <= n; i++) {
    graph[i][i] = 0;
  }

  for (let [a, b, c] of fares) {
    graph[a][b] = c;
    graph[b][a] = c;
  }

  for (let k = 1; k <= n; k++) {
    for (let j = 1; j <= n; j++) {
      for (let i = 1; i <= n; i++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  let result = graph[s][a] + graph[s][b];

  for (let i = 1; i <= n; i++) {
    result = Math.min(result, graph[s][i] + graph[i][a] + graph[i][b]);
  }
  return result;
}
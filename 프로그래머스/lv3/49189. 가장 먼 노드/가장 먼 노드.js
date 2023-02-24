function solution(n, edge) {
  const graph = new Array(n + 1).fill(0).map(() => []);

  edge.forEach((data, index) => {
    const [from, to] = data;
    graph[from].push(to);
    graph[to].push(from);
  });

  const visited = [1];
  const queue = [1];

  while (queue.length) {
    const cur = queue.pop();
    graph[cur].forEach((next, index) => {
      if (!visited[next - 1]) {
        visited[next - 1] = visited[cur - 1] + 1;
        queue.unshift(next);
      }
    });
  }

  const max = Math.max(...visited);
  const result = visited.filter((data) => data === max);

  return result.length;
}

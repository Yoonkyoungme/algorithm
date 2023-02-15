function solution(N, road, K) {
  const dist = new Array(N + 1).fill(Infinity);
  const graph = Array.from(Array(N + 1), () => []);

  road.forEach((data) => {
    const [a, b, c] = data;
    graph[a].push({ to: b, cost: c });
    graph[b].push({ to: a, cost: c });
  });

  console.log(graph);
  const queue = [{ to: 1, cost: 0 }];
  dist[1] = 0;

  while (queue.length) {
    const { to } = queue.pop();

    graph[to].forEach((next) => {
      const acc = dist[to] + next.cost;

      if (dist[next.to] > acc) {
        dist[next.to] = acc;
        queue.push(next);
      }
    });
  }

  return dist.filter((data) => data <= K).length;
}
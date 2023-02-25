function solution(maps) {
  const dist = new Array(maps.length)
    .fill(0)
    .map(() => new Array(maps[0].length).fill(-1));
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const queue = [[0, 0]];
  dist[0][0] = 1;

  while (queue.length) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let ny = y + dy[i];
      let nx = x + dx[i];

      if (
        ny >= 0 &&
        nx >= 0 &&
        ny < maps.length &&
        nx < maps[0].length &&
        maps[ny][nx] === 1 &&
        dist[ny][nx] === -1
      ) {
        dist[ny][nx] = dist[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }

  return dist[maps.length - 1][maps[0].length - 1] === -1
    ? -1
    : dist[maps.length - 1][maps[0].length - 1];
}
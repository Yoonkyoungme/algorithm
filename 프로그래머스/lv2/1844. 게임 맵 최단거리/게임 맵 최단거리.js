function solution(maps) {
  const height = maps.length;
  const width = maps[0].length;
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  const queue = [[0, 0]];

  const dist = new Array(height).fill().map(() => Array(width).fill(-1));
  dist[0][0] = 1;

  function isValidCoordinate(x, y) {
    return (
      x >= 0 &&
      y >= 0 &&
      x < width &&
      y < height &&
      dist[y][x] === -1 &&
      maps[y][x] === 1
    );
  }

  while (queue.length > 0) {
    const [y, x] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (isValidCoordinate(nx, ny)) {
        dist[ny][nx] = dist[y][x] + 1;
        queue.push([ny, nx]);
      }
    }
  }

  return dist[height - 1][width - 1] === -1 ? -1 : dist[height - 1][width - 1];
}

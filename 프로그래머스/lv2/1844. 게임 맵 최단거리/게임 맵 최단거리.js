function solution(maps) {
  const visited = new Array(maps.length)
    .fill(0)
    .map(() => new Array(maps[0].length).fill(1));
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  const queue = [[0, 0]];

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
        maps[ny][nx] === 1
      ) {
        {
          visited[ny][nx] = visited[y][y] + 1;
          queue.push([ny, nx]);
        }
      }
    }
  }

  return visited[-1][-1] === 1 ? -1 : visited[-1][-1];
}
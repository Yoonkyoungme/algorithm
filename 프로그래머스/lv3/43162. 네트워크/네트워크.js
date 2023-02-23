function solution(n, computers) {
  let result = 0;
  let visited = new Array(n).fill(false);

  function dfs(now) {
    visited[now] = true;

    for (let next = 0; next < n; next++) {
      if (!visited[next] && computers[now][next] === 1) dfs(next);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      result += 1;
    }
  }

  return result;
}
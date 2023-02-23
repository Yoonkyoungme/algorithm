function solution(tickets) {
  let visited = new Array(tickets.length).fill(false);
  let result = [];

  tickets.sort();

  function dfs(cur, count, path) {
    if (count === tickets.length && result.length === 0) {
      result = path;
      return;
    }

    for (let i = 0; i < tickets.length; i++) {
      if (!visited[i] && tickets[i][0] === cur) {
        visited[i] = true;
        dfs(tickets[i][1], count + 1, [...path, tickets[i][1]]);
        visited[i] = false;
      }
    }
  }

  dfs("ICN", 0, ["ICN"]);
  return result;
}
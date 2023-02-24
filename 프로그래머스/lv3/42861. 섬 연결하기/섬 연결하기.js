function solution(n, costs) {
  let result = 0;

  // 비용(가중치) 오름차순 정렬
  costs.sort((a, b) => a[2] - b[2]);

  // 초기화
  const parents = new Array(n).fill(0).map((data, index) => index);

  function findParent(x) {
    if (parents[x] === x) return x;
    return (parents[x] = findParent(parents[x]));
  }

  function union(x, y) {
    let nx = findParent(x);
    let ny = findParent(y);

    if (nx === ny) return false;

    nx < ny ? (parents[ny] = nx) : (parents[nx] = ny);
    return true;
  }

  costs.forEach((cost, index) => {
    if (union(cost[0], cost[1])) result += cost[2];
  });
  return result;
}

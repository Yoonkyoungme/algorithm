function solution(n, costs) {
  let result = 0;
  costs.sort((a, b) => a[2] - b[2]);

  let parents = [];

  // 자기 자신의 값을 부모로 가지는 배열 생성
  for (let i = 0; i < n; i++) parents.push(i);

  // 각 섬의 부모를 찾는 재귀 함수
  // 만약 초기 값이 아니라면 parent[x]를 이용해 위로 올라가서 부모값 찾음
  function findParent(x) {
    if (parents[x] === x) return x;
    return (parents[x] = findParent(parents[x]));
  }

  // 두 섬의 부모를 하나로 합쳐준다.
  // 이때 두 부모중 작은 값을 가지는 부모로 합쳐준다.
  function union(x, y) {
    const n1 = findParent(x);
    const n2 = findParent(y);

    if (n1 === n2) return false;

    n1 < n2 ? (parents[n2] = n1) : (parents[n1] = n2);
    return true;
  }

  costs.forEach((cost) => {
    if (union(cost[0], cost[1])) {
      result += cost[2];
    }
  });

  return result;
}

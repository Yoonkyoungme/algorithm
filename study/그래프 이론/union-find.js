// Initialization: 각 노드가 각각의 집합에 포함되도록 초기화하는 과정
const init = (N) => {
  return Array(N)
    .fill(0)
    .map((value, idx) => idx);
};

// Find: 특정 노드의 부모를 찾는다. (해당 노드가 속한 집합의 루트를 반환한다.)
// 경로 압축
const find = (x, parent) => {
  if (parent[x] === x) {
    return x;
  }
  const currentParent = find(parent[x], parent);
  parent[x] = currentParent;

  return currentParent;
};

// Union: 두 노드 A와 B를 한쪽으로 합친다.
const union = (A, B, parent) => {
  const rootA = find(A, parent);
  const rootB = find(B, parent);

  rootA < rootB ? (parent[rootB] = rootA) : (parent[rootA] = rootB);
};

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const M = +input.shift();
const plan = input.pop().split(" ").map(Number);
const graph = input.map((data) => data.split(" ").map(Number));

let parents = [];
// 초기화: 자기 자신의 값을 부모로 가지는 배열 생성
for (let i = 0; i < N; i++) parents.push(i);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1) union(i, j);
  }
}

for (let i = 0; i < M - 1; i++) {
  if (union(plan[i] - 1, plan[i + 1] - 1)) {
    console.log("NO");
    return;
  }
}

console.log("YES");

function getParent(x) {
  if (parents[x] === x) return x;
  return (parents[x] = getParent(parents[x]));
}

function union(x, y) {
  const n1 = getParent(x);
  const n2 = getParent(y);

  if (n1 === n2) return false;

  n1 < n2 ? (parents[n2] = n1) : (parents[n1] = n2);
  return true;
}

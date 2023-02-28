const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const arr = input.map((data) => data.split(" ").map(Number));

// 동서남북 방향
let dist = [
  [0, 1],
  [0, -1],
  [-1, 0],
  [1, 0],
];

// 유효한 값인지 확인
const isValid = (y, x) => 0 <= y && y < N && 0 <= x && x < M;

// 방문했는지 확인하는 배열
const visited = new Array(N).fill(null).map((_) => new Array(M).fill(false));

let max = 0;

function dfs(y, x, sum, count) {
  if (count === 4) {
    if (sum > max) max = sum;
    return;
  }

  for (let [dy, dx] of dist) {
    let [ny, nx] = [y + dy, x + dx];
    if (isValid(ny, nx) && visited[ny][nx] === false) {
      visited[ny][nx] = true;
      dfs(ny, nx, sum + arr[ny][nx], count + 1);
      visited[ny][nx] = false;
    }
  }
}

// ㅗ 모양은 dfs로 체크할 수 없기에 따로 4방향 체크를 한다.
const exceptionList = [];
for (let i = 0; i < 4; i++) {
  const newDist = [...dist];
  newDist.splice(i, 1);
  exceptionList.push(newDist);
}

// ㅗ모양 체크 리스트로 체크
function serachExceptionList(y, x) {
  for (let i = 0; i < exceptionList.length; i++) {
    let sum = arr[y][x];
    for (let [dy, dx] of exceptionList[i]) {
      let [ny, nx] = [y + dy, x + dx];
      if (!isValid(ny, nx)) break;
      sum += arr[ny][nx];
    }
    if (sum > max) max = sum;
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // ㅗ 제외한 나머지 체크
    dfs(i, j, 0, 0);

    // ㅗ 모양 체크
    serachExceptionList(i, j);
  }
}

console.log(max);
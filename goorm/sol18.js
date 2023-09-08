// 문제 18. 중첩 점

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const dp = new Array(2)
  .fill(null)
  .map(() => new Array(N + 1).fill(null).map(() => new Array(N + 1).fill(0)));
let result = 0;

for (let i = 1; i <= M; i++) {
  const [y, x, dir] = input[i].split(" ");
  let xPos = +x;
  let yPos = +y;

  if (dir === "D") {
    for (let i = yPos; i <= N; i++) {
      result += dp[1][i][xPos];
      dp[0][i][xPos] += 1;
    }
  } else if (dir === "U") {
    for (let i = 1; i <= yPos; i++) {
      result += dp[1][i][xPos];
      dp[0][i][xPos] += 1;
    }
  } else if (dir === "R") {
    for (let i = xPos; i <= N; i++) {
      result += dp[0][yPos][i];
      dp[1][yPos][i] += 1;
    }
  } else if (dir === "L") {
    for (let i = 1; i <= xPos; i++) {
      result += dp[0][yPos][i];
      dp[1][yPos][i] += 1;
    }
  }
}
console.log(result);

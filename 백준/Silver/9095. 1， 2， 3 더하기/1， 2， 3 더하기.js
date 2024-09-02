const fs = require("fs");
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const cases = input.slice(1);
const maxN = Math.max(...cases);

const dp = Array(maxN + 1).fill(0);
dp[0] = 1;

for (let i = 1; i <= maxN; i++) {
  if (i >= 1) dp[i] += dp[i - 1];
  if (i >= 2) dp[i] += dp[i - 2];
  if (i >= 3) dp[i] += dp[i - 3];
}

cases.forEach((n) => {
  console.log(dp[n]);
});

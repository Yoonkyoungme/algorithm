const fs = require("fs");
const input = fs
  .readFileSync(0, "utf-8")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const totalStairs = input[0];
const scores = input.slice(1);

function maxStairScore(totalStairs, scores) {
  if (totalStairs === 1) return scores[0];
  if (totalStairs === 2) return scores[0] + scores[1];

  const dp = new Array(totalStairs).fill(0);
  dp[0] = scores[0];
  dp[1] = scores[0] + scores[1];
  dp[2] = Math.max(scores[0] + scores[2], scores[1] + scores[2]);

  for (let i = 3; i < totalStairs; i++) {
    dp[i] = Math.max(
      dp[i - 2] + scores[i],
      dp[i - 3] + scores[i - 1] + scores[i]
    );
  }

  return dp[totalStairs - 1];
}

console.log(maxStairScore(totalStairs, scores));

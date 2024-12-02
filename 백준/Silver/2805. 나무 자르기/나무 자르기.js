const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...trees);
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  const total = trees.reduce(
    (sum, height) => sum + (height > mid ? height - mid : 0),
    0
  );

  if (total >= M) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);

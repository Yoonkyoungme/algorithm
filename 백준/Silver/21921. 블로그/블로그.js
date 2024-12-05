const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const visits = input[1].split(" ").map(Number);

let currentSum = 0;
let maxSum = 0;
let maxCount = 0;

for (let i = 0; i < X; i++) {
  currentSum += visits[i];
}

maxSum = currentSum;
maxCount = 1;

for (let i = X; i < N; i++) {
  currentSum += visits[i];
  currentSum -= visits[i - X];

  if (currentSum > maxSum) {
    maxSum = currentSum;
    maxCount = 1;
  } else if (currentSum === maxSum) {
    maxCount++;
  }
}

if (maxSum === 0) {
  console.log("SAD");
} else {
  console.log(maxSum);
  console.log(maxCount);
}

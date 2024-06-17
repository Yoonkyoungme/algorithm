const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const requests = input[1].split(" ").map(Number);
const totalBudget = +input[2];

let [left, right] = [0, Math.max(...requests)];
let resultBudget = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  const sum = requests.reduce(
    (acc, request) => acc + Math.min(request, mid),
    0
  );

  if (sum <= totalBudget) {
    resultBudget = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(resultBudget);

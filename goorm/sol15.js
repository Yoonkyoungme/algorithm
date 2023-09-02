// 문제 15. 과일 구매

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [N, K] = input[0].split(" ").map(Number);
const fruits = input.slice(1).map((fruit) => fruit.split(" ").map(Number));

const costs = [];
for (const [P, C] of fruits) {
  costs.push([C / P, P]);
}
costs.sort((a, b) => b[0] - a[0] || b[1] - a[1]);

let result = 0;
for (let i = 0; i < N; i++) {
  const [value, amount] = costs[i];
  const buy = Math.min(amount, K);
  K -= buy;
  result += value * buy;
}
console.log(result);

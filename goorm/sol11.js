// 문제 11. 통증(2)

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const [a, b] = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let find = false;
let use = parseInt(N / a);
let left = N % a;

while (left <= N) {
  if (left % b === 0) {
    use += left / b;
    find = true;
    break;
  }

  left += a;
  use -= 1;
}

if (!find) {
  use = -1;
}

console.log(use);

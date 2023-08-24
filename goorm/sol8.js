// 문제 8. 통증

const fs = require("fs");
let N = +fs.readFileSync("/dev/stdin").toString().trim();

const items = [14, 7, 1];
let result = 0;

for (const item of items) {
  result += parseInt(N / item);
  N %= item;
}

console.log(result);

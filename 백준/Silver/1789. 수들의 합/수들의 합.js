const fs = require("fs");
const S = +fs.readFileSync(0, "utf-8").toString().trim();

let N = 1;
let sum = 0;

while (N + sum <= S) {
  sum += N;
  N++;
}

console.log(N - 1);

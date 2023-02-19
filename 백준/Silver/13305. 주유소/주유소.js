const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];

const cityLength = input[1].split(" ").map(Number);
let totalLength = cityLength.reduce((acc, cur) => acc + cur);
const price = input[2].split(" ").map(Number).slice(0, -1);
let min = price[0];
let result = BigInt(min * cityLength[0]);
totalLength -= cityLength[0];

for (let i = 1; i < N - 1; i++) {
  if (totalLength === 0) break;

  if (price[i] < min) {
    min = price[i];
  }
  result += BigInt(min * cityLength[i]);
  totalLength -= cityLength[i];
}

console.log(String(result));

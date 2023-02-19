const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const cityLength = input[1].split(" ").map(Number);
let totalLength = cityLength.reduce((acc, cur) => acc + cur);
const price = input[2].split(" ").map(Number).slice(0, -1);
let result = 0;

for (let i = 0; i < N - 1; i++) {
  const min = Math.min(...price);

  if (price[i] === min) {
    result += min * totalLength;
    break;
  } else {
    result += price[i] * cityLength[i];
    totalLength -= cityLength[i];
  }
}

console.log(result);
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
const N = +input;

function calculateMinBag(N) {
  let count = 0;

  while (N >= 0) {
    if (N % 5 === 0) {
      count += N / 5;
      return count;
    }
    N -= 3;
    count++;
  }

  return -1;
}

console.log(calculateMinBag(N));

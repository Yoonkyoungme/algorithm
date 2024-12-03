const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const N = Number(input);

function isHansu(num) {
  if (num < 100) {
    return true;
  }

  const digits = String(num).split("").map(Number);
  const diff = digits[1] - digits[0];

  for (let i = 2; i < digits.length; i++) {
    if (digits[i] - digits[i - 1] !== diff) {
      return false;
    }
  }

  return true;
}

let count = 0;

for (let i = 1; i <= N; i++) {
  if (isHansu(i)) count++;
}

console.log(count);

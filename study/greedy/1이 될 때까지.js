// 3-4. 1이 될 때까지

let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(" ");

let [n, k] = input.map((data) => +data);
let count = 0;

while (n > 1) {
  n % k === 0 ? (n /= k) : (n -= 1);
  count += 1;
}

console.log(count);

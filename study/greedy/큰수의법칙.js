// 3-2. 큰수의법칙

let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m, k] = input[0].split(" ");
let arr = input[1].split(" ").map((data) => parseInt(data));

arr.sort((a, b) => b - a);

const first = arr[0];
const second = arr[1];
let result = 0;

while (true) {
  for (let i = 0; i < k; i++) {
    if (m === 0) break;
    result += first;
    m -= 1;
  }
  if (m === 0) break;
  result += second;
  m -= 1;
}

console.log(result);

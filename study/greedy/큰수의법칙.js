// 3-2. 큰수의법칙

let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m, k] = input[0].split(" ").map((data) => parseInt(data));
let arr = input[1].split(" ").map((data) => parseInt(data));

arr.sort((a, b) => b - a);

const first = arr[0];
const second = arr[1];

// solution1
let result1 = 0;

while (true) {
  for (let i = 0; i < k; i++) {
    if (m === 0) break;
    result1 += first;
    m -= 1;
  }
  if (m === 0) break;
  result1 += second;
  m -= 1;
}

console.log(result1);

// solution2
let [n2, m2, k2] = input[0].split(" ").map((data) => parseInt(data));
let result2 = 0;
let firstCount = parseInt(m2 / (k2 + 1)) * k2;
firstCount += m2 % (k2 + 1);

result2 += firstCount * first;
result2 += (m2 - firstCount) * second;

console.log(result2);

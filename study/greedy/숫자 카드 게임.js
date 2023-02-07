// 3-3. 숫자 카드 게임

let input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

let [n, m] = input[0].split(" ").map((data) => +data);
let [...numbers] = input.slice(1, n + 1);
let result = 0;

for (let i = 0; i < numbers.length; i++) {
  let data = numbers[i].split(" ").map((number) => +number);
  let maxData = Math.min(...data);
  if (maxData > result) result = maxData;
}

console.log(result);

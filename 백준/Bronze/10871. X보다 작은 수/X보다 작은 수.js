const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const numberList = input[1].split(" ").map(Number);
const result = [];

numberList.forEach((number) => {
  if (number < X) result.push(number);
});

console.log(result.join(" "));

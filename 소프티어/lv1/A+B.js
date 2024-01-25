// https://softeer.ai/practice/6295

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const sum = input.slice(1).map((line, index) => {
  const numbers = line.split(" ").map(Number);
  const result = numbers[0] + numbers[1];
  return `Case #${index + 1}: ${result}`;
});

console.log(sum.join("\n"));

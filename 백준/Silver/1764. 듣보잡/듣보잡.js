const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const canNotHear = new Set();
const canNotSee = new Set();

for (let i = 0; i < input.length; i++) {
  i < N ? canNotHear.add(input[i]) : canNotSee.add(input[i]);
}

const result = [];
canNotHear.forEach((data) => {
  if (canNotSee.has(data)) result.push(data);
});

console.log(`${result.length}\n${result.sort().join("\n")}`);

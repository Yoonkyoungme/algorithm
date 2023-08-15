// 문제 2. 프로젝트 매니징

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const [T, M] = input[1].split(" ").map(Number);
const numbers = input.slice(2).map(Number);
let totalTime = T * 60 + M;
let result = "";

for (const num of numbers) {
  totalTime += num;
}

let hours = parseInt(totalTime / 60);
let minutes = totalTime % 60;

if (hours >= 24) {
  hours %= 24;
}

console.log(`${hours} ${minutes}`);

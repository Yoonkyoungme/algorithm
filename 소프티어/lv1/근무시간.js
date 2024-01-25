// https://softeer.ai/practice/6254

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let totalMinutes = 0;

input.forEach((line) => {
  const times = line.split(" ");
  const start = times[0].split(":").map(Number);
  const end = times[1].split(":").map(Number);

  const startMinutes = start[0] * 60 + start[1];
  const endMinutes = end[0] * 60 + end[1];

  totalMinutes += endMinutes - startMinutes;
});

console.log(totalMinutes);

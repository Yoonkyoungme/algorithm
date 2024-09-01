const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const N = +input[0];
const times = input[1].split(" ").map(Number);

times.sort((a, b) => a - b);

let totalWaitTime = 0;
let accumulativeTime = 0;

for (let i = 0; i < N; i++) {
  accumulativeTime += times[i];
  totalWaitTime += accumulativeTime;
}

console.log(totalWaitTime);

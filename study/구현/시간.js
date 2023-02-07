// 4-2. 시간

const input = require("fs").readFileSync("example.txt").toString().trim();
const HOURS = +input;
const MINUTES = 60;
const SECONDS = 60;
let count = 0;

for (let i = 0; i <= HOURS; i++) {
  for (let j = 0; j < SECONDS; j++) {
    for (let k = 0; k < MINUTES; k++) {
      let time = `${i}${j}${k}`;
      if (time.includes("3")) count += 1;
    }
  }
}

console.log(count);

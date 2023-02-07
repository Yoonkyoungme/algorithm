// 4-1. 상하좌우

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const dist = input[1].split(" ");

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const movingDirection = ["U", "D", "L", "R"];
let [y, x] = [1, 1];

dist.forEach((data, index) => {
  for (let i = 0; i < 4; i++) {
    if (data === movingDirection[i]) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 1 && ny >= 1 && nx < n && ny < n) {
        x = nx;
        y = ny;
      }
    }
  }
});

console.log(y, x);

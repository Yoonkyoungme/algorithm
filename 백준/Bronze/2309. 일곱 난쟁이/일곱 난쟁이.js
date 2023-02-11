const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const heightList = input.map(Number);
let sum = heightList.reduce((acc, cur) => acc + cur);
let result;

for (let i = 0; i < heightList.length; i++) {
  for (let j = i + 1; j < heightList.length; j++) {
    if (heightList[i] + heightList[j] === sum - 100) {
      result = heightList.filter(
        (data) => data !== heightList[i] && data !== heightList[j]
      );
    }
  }
}

result.sort((a, b) => a - b);
result.forEach((data) => console.log(data));

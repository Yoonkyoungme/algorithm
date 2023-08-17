// 문제4. 완벽한 햄버거 만들기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const flavorList = input[1].split(" ").map(Number);

const maxValue = Math.max(...flavorList);
const maxIndex = flavorList.indexOf(maxValue);

const leftList = flavorList.slice(0, maxIndex);
const rightList = flavorList.slice(maxIndex);

let result = 0;
if (leftList.length !== 0) {
  for (let i = 0; i < leftList.length - 1; i++) {
    if (leftList[i] > leftList[i + 1]) {
      console.log(0);
      return;
    }
    result += leftList[i];
  }
  result += leftList[leftList.length - 1];
}

if (rightList.length !== 0) {
  for (let i = 0; i < rightList.length - 1; i++) {
    if (rightList[i] < rightList[i + 1]) {
      console.log(0);
      return;
    }
    result += rightList[i];
  }
  result += rightList[rightList.length - 1];
}

console.log(result);

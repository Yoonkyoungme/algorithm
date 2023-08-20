// 문제 5. 이진수 정렬

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const numberList = input[1].split(" ").map(Number);
const sortList = [];

numberList.forEach((number, index) => {
  const countOne = [...number.toString(2)].filter(
    (data) => data === "1"
  ).length;
  sortList[index] = [number, countOne];
});

sortList.sort((a, b) => b[1] - a[1] || b[0] - a[0]);
console.log(sortList[K - 1][0]);

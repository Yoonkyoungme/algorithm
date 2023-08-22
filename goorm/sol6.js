// 문제 6. 문자열 나누기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = +input[0];
const string = input[1];
const dividedString = new Set();
const wordList = [];

for (let i = 1; i < N - 1; i++) {
  for (let j = i + 1; j < N; j++) {
    const [first, second, third] = [
      string.slice(0, i),
      string.slice(i, j),
      string.slice(j),
    ];
    dividedString.add(first);
    dividedString.add(second);
    dividedString.add(third);

    wordList.push([first, second, third]);
  }
}

const sortedString = [...dividedString].sort();
let result = 0;

for (const words of wordList) {
  let score = 0;
  for (const word of words) {
    score += sortedString.indexOf(word) + 1;
  }
  result = Math.max(result, score);
}

console.log(result);

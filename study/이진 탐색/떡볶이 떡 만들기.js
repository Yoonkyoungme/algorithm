// 7-3. 떡볶이 떡 만들기

const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const len = input[1].split(" ").map(Number);
len.sort((a, b) => a - b);

function solution() {
  let start = 0;
  let end = len[len.length - 1];

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    len.forEach((data) => {
      if (data > mid) total += data - mid;
    });

    if (total === M) return mid;
    else if (total > M) start = mid + 1;
    else if (total < M) end = mid - 1;
  }
}

console.log(solution());

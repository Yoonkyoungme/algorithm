const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const testCase = +input.shift();

for (let i = 0; i < testCase; i++) {
  let N = +input.shift();
  let result = 1;

  let score = input.splice(0, N).map((data) => data.split(" ").map(Number));
  score.sort((a, b) => a[0] - b[0]);
  // console.log(score);

  let top = score[0][1];

  for (let next = 1; next < N; next++) {
    if (score[next][1] < top) {
      result += 1;
      top = score[next][1];
    }
  }

  console.log(result);
}

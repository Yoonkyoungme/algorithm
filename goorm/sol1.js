// 문제 1. 운동 중독 플레이어

const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => {
  input = line;
  rl.close();
});

rl.on("close", () => {
  const data = input.split(" ").map(Number);
  const [W, R] = data;
  const result = parseInt(W * (1 + R / 30));
  console.log(result);
});

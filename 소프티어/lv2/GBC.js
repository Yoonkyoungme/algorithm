// https://softeer.ai/class/devcrew/study/resource/detail/6270?id=155&resourceId=81

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const limitSpeeds = input.slice(1, N + 1).map((v) => v.split(" ").map(Number));
const testSpeeds = input.slice(N + 1).map((v) => v.split(" ").map(Number));

function generateSpeedArray(arr, num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr[i][0]; j++) {
      result.push(arr[i][1]);
    }
  }
  return result;
}

const limits = generateSpeedArray(limitSpeeds, N);
const tests = generateSpeedArray(testSpeeds, M);

let maxDifference = 0;
for (let i = 0; i < 100; i++) {
  let speedDifference = tests[i] - limits[i];
  if (speedDifference > maxDifference) maxDifference = speedDifference;
}

console.log(maxDifference);

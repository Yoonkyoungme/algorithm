const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ");
const [N, M] = input.map(Number);

const result = [];

function generatePermutations(start, depth) {
  if (depth === M) {
    console.log(result.join(" "));
    return;
  }

  for (let i = start; i <= N; i++) {
    result.push(i);
    generatePermutations(i + 1, depth + 1);
    result.pop();
  }
}

generatePermutations(1, 0);

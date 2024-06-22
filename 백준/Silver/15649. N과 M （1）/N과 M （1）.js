const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split(" ");
const [N, M] = input.map(Number);

const visited = Array.from({ length: N + 1 }, () => false);
const result = [];

function generatePermutations(depth) {
  if (depth === M) {
    console.log(result.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);
      generatePermutations(depth + 1);
      result.pop(i);
      visited[i] = false;
    }
  }
}

generatePermutations(0);

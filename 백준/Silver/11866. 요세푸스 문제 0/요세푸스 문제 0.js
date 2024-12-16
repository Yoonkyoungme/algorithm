const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(" ");
const [N, K] = input.map(Number);

const queue = Array.from({ length: N }, (_, i) => i + 1);
const results = [];

while (queue.length > 0) {
  for (let i = 1; i < K; i++) {
    queue.push(queue.shift());
  }

  results.push(queue.shift());
}

console.log(`<${results.join(", ")}>`);

const fs = require("fs");
const [N, K] = fs.readFileSync(0, 'utf-8').toString().trim().split(" ");
const result = [];
const queue = Array.from({ length: N }, (_, i) => i + 1);

while (queue.length > 0) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }

  result.push(queue.shift());
}

console.log(`<${result.join(", ")}>`);

const fs = require("fs");
let N = +fs.readFileSync("/dev/stdin").toString().trim();
let visited = Array(N + 1).fill(false);
let queue = [[N, 0]]; // [node, depth]

while (queue.length) {
  let [node, depth] = queue.shift();
  
  if (node === 0) {
    console.log(depth);
    break;
  }

  for (let i = Math.floor(Math.sqrt(node)); i > 0; i--) {
    let next_node = node - i * i;
    if (!visited[next_node]) {
      queue.push([next_node, depth + 1]);
      visited[next_node] = true;
    }
  }
}

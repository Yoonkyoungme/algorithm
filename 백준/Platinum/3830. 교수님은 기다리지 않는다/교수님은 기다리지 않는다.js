const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

let idx = 0;
let result = [];

while (idx < input.length) {
  const [N, M] = input[idx].split(" ").map(Number);

  if (N === 0 && M === 0) {
    break;
  }

  idx++;

  const parent = Array.from({ length: N + 1 }, (_, i) => i);
  const weight = Array.from({ length: N + 1 }, () => 0);

  const find = (x) => {
    if (parent[x] !== x) {
      const root = find(parent[x]);
      weight[x] += weight[parent[x]];
      parent[x] = root;
    }
    return parent[x];
  };

  const union = (a, b, w) => {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA !== rootB) {
      parent[rootB] = rootA;
      weight[rootB] = weight[a] - weight[b] + w;
    }
  };

  for (let i = 0; i < M; i++) {
    const [command, a, b, w] = input[idx].split(" ");
    if (command === "!") {
      union(Number(a), Number(b), Number(w));
    } else if (command === "?") {
      const rootA = find(Number(a));
      const rootB = find(Number(b));

      if (rootA !== rootB) {
        result.push("UNKNOWN");
      } else {
        result.push(weight[Number(b)] - weight[Number(a)]);
      }
    }

    idx++;
  }
}

console.log(result.join("\n"));

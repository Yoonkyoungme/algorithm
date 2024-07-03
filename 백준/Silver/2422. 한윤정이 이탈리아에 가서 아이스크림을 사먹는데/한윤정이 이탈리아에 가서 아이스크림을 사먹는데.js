const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const badCase = input.slice(1);

const badChoices = Array.from({ length: N + 1 }, () =>
  Array(N + 1).fill(false)
);

for (let i = 0; i < M; i++) {
  const [a, b] = badCase[i].split(" ").map(Number);

  badChoices[a][b] = true;
  badChoices[b][a] = true;
}

let result = 0;

for (let i = 1; i <= N - 2; i++) {
  for (let j = i + 1; j <= N - 1; j++) {
    if (badChoices[i][j]) continue;
    for (let k = j + 1; k <= N; k++) {
      if (badChoices[i][k] || badChoices[j][k]) continue;

      result++;
    }
  }
}

console.log(result);

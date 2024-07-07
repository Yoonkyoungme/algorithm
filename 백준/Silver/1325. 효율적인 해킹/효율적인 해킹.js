const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const solution = () => {
  const trustRelations = Array.from({ length: N + 1 }, () => []);
  for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(" ").map(Number);
    trustRelations[b].push(a);
  }

  let maxResult = 0;
  let answer = [];

  const dfs = (start) => {
    const check = Array.from({ length: N + 1 }, () => 0);
    let count = 1;
    const stack = [start];

    check[start] = 1;

    while (stack.length) {
      const value = stack.pop();
      for (let i = 0; i < trustRelations[value].length; i++) {
        if (!check[trustRelations[value][i]]) {
          count++;
          check[trustRelations[value][i]] = 1;
          stack.push(trustRelations[value][i]);
        }
      }
    }

    if (maxResult > count) return;
    else if (maxResult === count) answer.push(start);
    else {
      maxResult = count;
      answer = [start];
    }
  };

  for (let i = 1; i <= N; i++) {
    dfs(i);
  }

  return answer.join(" ");
};

console.log(solution());

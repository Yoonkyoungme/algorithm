const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  const [N, M] = input.shift().split(" ").map(Number);
  const nodes = input.map((e) => e.split(" ").map(Number));
  const parents = [];
  for (let i = 0; i <= N; i++) {
    parents.push(i);
  }

  function getParent(x) {
    if (parents[x] === x) return x;
    return (parents[x] = getParent(parents[x]));
  }

  function union(x, y) {
    n1 = getParent(x);
    n2 = getParent(y);
    n1 < n2 ? (parents[n2] = n1) : (parents[n1] = n2);
  }

  nodes.forEach(([type, x, y]) => {
    if (type === 0) union(x, y);
    else getParent(x) === getParent(y) ? console.log("YES") : console.log("NO");
  });
}

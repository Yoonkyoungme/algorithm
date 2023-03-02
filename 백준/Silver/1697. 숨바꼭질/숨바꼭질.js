const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");

const [N, M] = input.map(Number);
const visited = new Array(100000).fill(false);

let queue = [[N, 0]];

while (queue.length) {
  let [cur, count] = queue.pop();

  if (cur === M) {
    console.log(count);
    return;
  }

  for (let next of [cur - 1, cur + 1, cur * 2]) {
    if (!visited[next] && next >= 0 && next <= 100000) {
      visited[next] = true;
      queue.unshift([next, count + 1]);
    }
  }
}

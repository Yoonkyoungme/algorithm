// 문제 10. GameJam

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const goorm = input[1].split(" ").map(Number);
const player = input[2].split(" ").map(Number);
const board = input.slice(3).map((row) =>
  row.split(" ").map((item) => {
    const count = Number(item.slice(0, -1));
    const command = item.charAt(item.length - 1);
    return [count, command];
  })
);

const direction = {
  U: [-1, 0],
  D: [1, 0],
  R: [0, 1],
  L: [0, -1],
};

function getScore(r, c) {
  const visited = Array.from({ length: N }, () => Array(N).fill(0));
  let nr = r - 1;
  let nc = c - 1;
  let score = 0;

  while (true) {
    const [count, command] = board[nr][nc];
    const [dr, dc] = direction[command];

    for (let i = 0; i < count; i++) {
      visited[nr][nc] = 1;
      score++;
      nr = (nr + dr + N) % N;
      nc = (nc + dc + N) % N;
      if (visited[nr][nc] === 1) {
        return score;
      }
    }
  }
}

const scoreGoorm = getScore(goorm[0], goorm[1]);
const scorePlayer = getScore(player[0], player[1]);

if (scoreGoorm > scorePlayer) console.log(`goorm ${scoreGoorm}`);
else console.log(`player ${scorePlayer}`);

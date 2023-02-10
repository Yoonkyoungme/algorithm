// 4-3. 왕실의 나이트

const input = require("fs").readFileSync("example.txt").toString().trim();
let column = input.charCodeAt(0) - 96;
let row = parseInt(input[1]);
const movingDirection = [
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [1, 2],
  [-1, 2],
  [1, -2],
  [-1, -2],
];

let result = 0;

movingDirection.forEach((direction, index) => {
  let newColumn = column + direction[0];
  let newRow = row + direction[1];

  if (newColumn >= 1 && newColumn <= 8 && newRow >= 1 && newRow <= 8)
    result += 1;
});

console.log(result);

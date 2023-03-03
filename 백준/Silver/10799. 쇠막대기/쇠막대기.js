const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

let result = 0;
let stack = [];

input.forEach((data, index) => {
  if (data === "(") {
    stack.push(data);
    result += 1;
  } else {
    stack.pop();
    if (input[index - 1] === "(") result += stack.length - 1;
  }
});

console.log(result);

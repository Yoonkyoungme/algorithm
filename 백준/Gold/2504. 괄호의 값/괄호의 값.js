const fs = require("fs");
const inputs = fs.readFileSync(0, "utf-8").toString().trim();

const stack = [];
let result = 0;
let temp = 1;

for (let i = 0; i < inputs.length; i++) {
  const char = inputs[i];

  if (char === "(") {
    stack.push(char);
    temp *= 2;
  } else if (char === "[") {
    stack.push(char);
    temp *= 3;
  } else if (char === ")") {
    if (stack.length === 0 || stack[stack.length - 1] !== "(") {
      console.log(0);
      return;
    }
    if (inputs[i - 1] === "(") {
      result += temp;
    }
    stack.pop();
    temp /= 2;
  } else if (char === "]") {
    if (stack.length === 0 || stack[stack.length - 1] !== "[") {
      console.log(0);
      return;
    }
    if (inputs[i - 1] === "[") {
      result += temp;
    }
    stack.pop();
    temp /= 3;
  }
}

console.log(stack.length === 0 ? result : 0);

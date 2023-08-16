// 문제 3. 합 계산기

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input[0];
let totalSum = 0;

function calculateExpression(expression) {
  const parts = expression.split(" ");
  const operator = parts[1];
  const num1 = +parts[0];
  const num2 = +parts[2];

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return parseInt(num1 / num2);
  }
}

for (let i = 1; i <= T; i++) {
  totalSum += calculateExpression(input[i]);
}

console.log(totalSum);

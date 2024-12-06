const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();

const stack = [];
const pairs = [];

[...input].forEach((char, index) => {
  if (char === "(") {
    stack.push(index);
  } else if (char === ")") {
    pairs.push([stack.pop(), index]);
  }
});

const results = new Set();

const generateCombinations = (index, removed) => {
  if (index === pairs.length) {
    const expression = [...input];

    removed.forEach(([open, close]) => {
      expression[open] = "";
      expression[close] = "";
    });

    results.add(expression.join(""));
    return;
  }

  generateCombinations(index + 1, removed);
  generateCombinations(index + 1, [...removed, pairs[index]]);
};

generateCombinations(0, []);

const sortedResult = [...results].sort();

sortedResult.forEach((result) => {
  if (result !== input) {
    console.log(result);
  }
});

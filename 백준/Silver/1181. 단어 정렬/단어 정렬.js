const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const words = input.slice(1);

const sortedWords = [...new Set(words)].sort((a, b) =>
  a.length === b.length ? a.localeCompare(b) : a.length - b.length
);

console.log(sortedWords.join("\n"));

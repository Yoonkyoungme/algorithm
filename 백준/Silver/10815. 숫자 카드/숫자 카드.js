const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim().split("\n");

const cards = input[1].split(" ").map(Number);
const cardSet = new Set(cards);
const checks = input[3].split(" ").map(Number);

const result = checks.map((num) => (cardSet.has(num) ? 1 : 0));

console.log(result.join(" "));

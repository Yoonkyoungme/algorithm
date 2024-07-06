const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").toString().trim();
const [H, I, A, R, C] = input.split(" ").map(Number);

const firstResult = H * I;
const secondResult = A * R * C;

console.log(firstResult - secondResult);

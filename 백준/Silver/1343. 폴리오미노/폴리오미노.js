const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let result = input.replaceAll("XXXX", "AAAA").replaceAll("XX", "BB");
result = result.includes("X") ? -1 : result;
console.log(result);

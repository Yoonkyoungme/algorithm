const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const strList = [];

for (let i = 0; i < input.length; i++) {
  strList.push(input.substring(i, input.length));
}

console.log(strList.sort().join("\n"));
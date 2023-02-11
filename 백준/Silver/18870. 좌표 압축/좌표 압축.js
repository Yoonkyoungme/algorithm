const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/);

const N = +input.shift();
const array = input.map((data) => +data);
let result = "";

const setData = Array.from(new Set([...array])).sort((a, b) => a - b);
const mapData = new Map();

setData.forEach((data, index) => mapData.set(data, index));
array.forEach((data, index) => (result += mapData.get(data) + " "));

console.log(result);

const fs = require("fs");
const S = fs.readFileSync("/dev/stdin").toString().trim();
const LETTER_LIST = ["pi", "ka", "chu"];
let result = S;
let isPikachuWord = true;

while (result.length > 0) {
  let found = false;
  for (const letter of LETTER_LIST) {
    if (result.startsWith(letter)) {
      result = result.slice(letter.length);
      found = true;
      break;
    }
  }
  if (!found) {
    isPikachuWord = false;
    break;
  }
}

console.log(isPikachuWord ? "YES" : "NO");

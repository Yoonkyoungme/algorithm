
function solution(s, skip, index) {
  let result = "";
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
    
    const newAlphabet = alphabet.filter((ch) => ![...skip].includes(ch));
    
    for (let i = 0; i < s.length; i++){
        let change = newAlphabet.indexOf(s[i]) + index;
        result += newAlphabet[change % newAlphabet.length];
    }
  return result;
}

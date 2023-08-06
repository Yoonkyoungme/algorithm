function solution(s) {
  const obj = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let result = 0;

  const isCorrectBracket = (rotation) => {
    let stack = [];
    for (let ch of rotation) {
      if ("([{".includes(ch)) {
        stack.push(ch);
      } else if (obj[ch] !== stack.pop()) {
        return false;
      }
    }
    return stack.length ? false : true;
  };

  for (let i = 0; i < s.length; i++) {
    let rotation = s.slice(i) + s.slice(0, i);
    result += isCorrectBracket(rotation) ? 1 : 0;
  }
  return result;
}
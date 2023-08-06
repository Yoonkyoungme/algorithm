function solution(s) {
  let result = 0;
  let stack = [];
    
  if (s.length % 2 === 1) return 0;

  for (let i = 0; i < s.length; i++) {
    let isFalse = true;
    arr = s.slice(i) + s.slice(0, i);

    for (let ch of arr) {
      if (ch === "(" || ch === "[" || ch === "{") {
        stack.push(ch);
      } else {
        let comp = stack.pop();
        if (comp === "(" && ch == ")") continue;
        else if (comp === "[" && ch == "]") continue;
        else if (comp === "{" && ch == "}") continue;
        else {
          isFalse = false;
          break;
        }
      }
    }
    if (isFalse === true) result++;
  }
  return result;
}
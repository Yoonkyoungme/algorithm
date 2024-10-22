function solution(s) {
  const stack = [];

  for (const char of s) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (!stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

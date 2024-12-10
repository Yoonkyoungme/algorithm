function solution(s, n) {
  let result = "";

  for (const char of s) {
    if (char === " ") {
      result += " ";
      continue;
    }

    const isLower = char >= "a";
    const base = isLower ? "a".charCodeAt(0) : "A".charCodeAt(0);

    const newChar = String.fromCharCode(
      ((char.charCodeAt(0) - base + n) % 26) + base
    );

    result += newChar;
  }

  return result;
}

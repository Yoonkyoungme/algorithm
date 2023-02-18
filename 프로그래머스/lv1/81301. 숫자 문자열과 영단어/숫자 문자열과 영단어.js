function solution(s) {
  const words = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < words.length; i++) {
    let newArr = s.split(words[i]);
    s = newArr.join(i);
  }
  return parseInt(s);
}

function solution(s) {
  let wordList = s
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1));

  return wordList.join(" ");
}
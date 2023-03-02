function solution(word) {
  const alphabet = ["A", "E", "I", "O", "U"];
  let count = 0;
  let result = new Map();

  function search(curWord) {
    if (curWord.length === 5) return;

    for (let i = 0; i < alphabet.length; i++) {
      count += 1;
      result.set(curWord + alphabet[i], count);
      search(curWord + alphabet[i], count);
    }
  }

  search("");
  return result.get(word);
}

function solution(s) {
  let result = [0, 0];
  let checkChar = null;
  let count = 0;

  [...s].forEach((char, index) => {
    if (checkChar === null) checkChar = char;

    checkChar === char ? result[0]++ : result[1]++;

    if (result[0] === result[1]) {
      count++;
      result = [0, 0];
      checkChar = null;
    }
  });

  if (checkChar !== null) count++;

  return count;
}

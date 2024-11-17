/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
const gcdOfStrings = function (str1, str2) {
  const letters = new Set();
  let currentStr1 = "";

  for (const str of str1) {
    currentStr1 += str;
    letters.add(currentStr1);
  }

  let result = "";
  let currentStr2 = "";

  for (const str of str2) {
    currentStr2 += str;
        
    if (
      letters.has(currentStr2) &&
      currentStr2.repeat(Math.floor(str2.length / currentStr2.length)) === str2 &&
      currentStr2.repeat(Math.floor(str1.length / currentStr2.length)) === str1
    ) {
      result = currentStr2;
    }
  }

  return result;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean} -  return true if ransomNote can be constructed by using the letters from magazine and false otherwise
 */
const canConstruct = function(ransomNote, magazine) {
    const charCountMap = new Map();

    for (let char of magazine) {
        if (charCountMap.has(char)) {
            charCountMap.set(char, charCountMap.get(char) + 1);
        } else {
            charCountMap.set(char, 1);
        }
    }

    for (let char of ransomNote) {
        if (charCountMap.has(char) && charCountMap.get(char) > 0) {
            charCountMap.set(char, charCountMap.get(char) - 1);
        } else {
            return false;
        }
    }

    return true;
};
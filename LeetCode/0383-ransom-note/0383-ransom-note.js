/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean} -  return true if ransomNote can be constructed by using the letters from magazine and false otherwise
 */
const canConstruct = function(ransomNote, magazine) {
    const charCount = {};

    for (let char of magazine) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of ransomNote) {
        if (!charCount[char]) {
            return false;
        }

        charCount[char]--;
    }

    return true;
};
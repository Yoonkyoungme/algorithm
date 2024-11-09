/**
 * @param {string} s
 * @return {number} - the length of the last word in the string
 */
const lengthOfLastWord = function(s) {
    const words = s.trim().split(' ');

    return words[words.length - 1].length;
};

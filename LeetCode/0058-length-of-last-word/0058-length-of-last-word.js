/**
 * @param {string} s
 * @returns {number} the length of the last word in the string
 */

const lengthOfLastWord = function(s) {
    const words = [];
    let word = "";
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== " ") {
            word += s[i];
        } else if (s[i] === " " && word !== "") {
            words.push(word);
            word = "";
        }
    }

    if (word !== "") {
        words.push(word);
    }
    
    const lastWord = words.at(-1);
    return lastWord.length;
};
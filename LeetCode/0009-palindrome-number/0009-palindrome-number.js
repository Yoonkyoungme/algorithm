/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    
    const result = [...x.toString()].reverse().join("");

    return x === +result;
};
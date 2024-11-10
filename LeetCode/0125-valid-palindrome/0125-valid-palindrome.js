/**
 * @param {string} s
 * @return {boolean} - If s is a palindrome, return true. otherwise, return false.
 */
const isPalindrome = function(s) {
    const convertedS = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let first = 0;
    let last = convertedS.length - 1;

    while (first < last) {
        if (convertedS[first] !== convertedS[last]) {
            return false;
        }
        
        first++;
        last--;
    }

    return true;
};
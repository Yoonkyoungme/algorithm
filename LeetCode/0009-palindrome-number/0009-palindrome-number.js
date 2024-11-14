/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    const convertedX = x.toString();

    let start = 0;
    let end = convertedX.length - 1;


    while (start <= end) {
        if (convertedX[start] !== convertedX[end]) {
            return false;
        }

        start++;
        end--;
    }

    return true;
};



/**
 * @param {string} num
 * @return {boolean}
 */
const isBalanced = function(num) {
    let sumOfOdd = 0;
    let sumOfEven = 0;

    for (let i = 0; i < num.length; i++) {
        if (i % 2 === 0) {
            sumOfEven += Number(num[i]);
        } else {
            sumOfOdd += Number(num[i]);
        }
    }

    return sumOfOdd === sumOfEven;
};
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    const num = BigInt(digits.join(""));
    const result = num + 1n;  

    return [...result.toString()].map(Number);
};
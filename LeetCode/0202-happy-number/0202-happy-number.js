/**
 * @param {number} n
 * @return {boolean}
 */

function sumOfSquares(n) {
    let sum = 0;

    while (n > 0) {
        const digit = n % 10;
        sum += digit * digit;
        n = Math.floor(n / 10);
    }

    return sum;
}

function isHappy(n) {
    const squareNumbers = new Set();

    while (n !== 1 && !squareNumbers.has(n)) {
        squareNumbers.add(n);
        n = sumOfSquares(n);
    }

    return n === 1;
}

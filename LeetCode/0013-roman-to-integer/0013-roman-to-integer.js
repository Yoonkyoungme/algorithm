/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romanRule = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const currentValue = romanRule[s[i]];
        const nextValue = romanRule[s[i + 1]];

        if (currentValue < nextValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
    }

    return total;
};
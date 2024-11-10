/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    const brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    const stack = [];

    for (let bracket of s) {
        if (brackets[bracket]) {
            stack.push(bracket);
        } else {
            if (stack.length === 0 || brackets[stack.at(-1)] !== bracket) {
                return false;
            }

            stack.pop();           
        }
    }

    return stack.length === 0;
};
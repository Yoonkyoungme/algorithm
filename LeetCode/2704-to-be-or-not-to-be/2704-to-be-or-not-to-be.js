/**
 * @param {string} val
 * @return {Object}
 */

const validateCondition = (condition, errorMessage) => {
    if (condition) {
        return true;
    }

    throw new Error(errorMessage);
};

const expect = function(val) {
    return {
        toBe: (val2) => validateCondition(val === val2, "Not Equal"),
        notToBe: (val2) => validateCondition(val !== val2, "Equal")
    };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
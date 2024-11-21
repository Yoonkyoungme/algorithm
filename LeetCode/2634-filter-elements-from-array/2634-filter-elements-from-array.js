/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
    const results = [];

    arr.forEach((value, index) => {
        if (fn(value, index)) {
            results.push(value);
        }
    })

    return results;
};
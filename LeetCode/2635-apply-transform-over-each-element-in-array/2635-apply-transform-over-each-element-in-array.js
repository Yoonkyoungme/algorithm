/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
    const results = [];
    
    arr.forEach((value, index) => {
        results.push(fn(value, index));
    })

    return results;
};
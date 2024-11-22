/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function(nums, fn, init) {
    let sum = init;

    for (const num of nums) {
        sum = fn(sum, num);
    }

    return sum;
};
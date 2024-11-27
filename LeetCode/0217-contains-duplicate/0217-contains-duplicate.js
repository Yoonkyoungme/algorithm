/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const uniqueNums = new Set(nums);

    return uniqueNums.size !== nums.length;
};
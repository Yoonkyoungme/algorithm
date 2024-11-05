/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let uniqueIndex = 0;

    for (let currentIndex = 1; currentIndex < nums.length; currentIndex++) {
        if (nums[uniqueIndex] !== nums[currentIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[currentIndex];
        }
    }

    return uniqueIndex + 1;
};
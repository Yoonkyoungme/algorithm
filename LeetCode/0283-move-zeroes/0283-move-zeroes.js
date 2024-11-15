/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {  
    let nonZeroIndex = 0; 

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (num !== 0) {
            nums[nonZeroIndex] = num;
            nonZeroIndex++;
        }
    }

    for (i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
};
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const subtractedNum = target - nums[i];

        if (map.has(subtractedNum)) {
            return [map.get(subtractedNum), i];
        }

        map.set(nums[i], i);
    }
};
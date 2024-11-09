/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    const N = nums.length;
    const map = new Map();

    for (let i = 0; i < N; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1);
        }
    }

    for (let [key, value] of map) {
        if (value >= N / 2) {
            return key;
        }
    }
};
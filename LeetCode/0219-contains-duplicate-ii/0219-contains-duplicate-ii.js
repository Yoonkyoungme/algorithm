/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

function containsNearbyDuplicate(nums, k) {   
    const counts = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (counts.has(num) && i - counts.get(num) <= k) {
            return true;
        }

        counts.set(num, i);
    }

    return false;
};



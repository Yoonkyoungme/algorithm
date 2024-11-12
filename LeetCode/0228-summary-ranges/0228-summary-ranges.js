/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function(nums) {
    const results = [];
    let startNum = null;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (startNum === null) {
            startNum = num
        }

        if (i === nums.length - 1 || num + 1 !== nums[i + 1]) {
            if (startNum === num) {
                results.push(`${startNum}`);
            } else {
                results.push(`${startNum}->${num}`);
            }
            startNum = null;
        }
    }

    return results;
};

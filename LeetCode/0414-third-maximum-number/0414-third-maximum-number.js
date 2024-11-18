/**
 * @param {number[]} nums
 * @return {number}
 */
function thirdMax(nums) {
    const sortedNumsByDesc = [...new Set(nums)].sort((a, b) => b - a);
    
    if (sortedNumsByDesc[2] === undefined) {
        return sortedNumsByDesc[0];
    }
    
    return sortedNumsByDesc[2];
}

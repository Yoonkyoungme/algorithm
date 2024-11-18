/**
 * @param {number[]} nums
 * @return {number}
 */

function thirdMax(nums) {
    let first = -Infinity;
    let second = -Infinity;
    let third = -Infinity;

    for (const num of nums) {
        if (first === num || second === num || third === num) {
            continue;
        }

        if (first < num) {
            third = second;
            second = first;
            first = num;
        } else if (second < num) {
            third = second;
            second = num;
        } else if (third < num) {
            third = num;
        }
    }

    return third === -Infinity ? first : third;
}
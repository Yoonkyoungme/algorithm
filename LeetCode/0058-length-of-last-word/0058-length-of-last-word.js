/**
 * @param {string} s
 * @return {number} - the length of the last word in the string
 */
const lengthOfLastWord = function(s) {
    // Step 1: Trim any trailing spaces from the string
    s = s.trim();

    // Step 2: Find the last space in the trimmed string
    const lastSpaceIndex = s.lastIndexOf(' ');
    console.log(s, s.length, lastSpaceIndex)

    // Step 3: The last word is the substring after the last space, so calculate its length
    return s.length - lastSpaceIndex - 1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    /** Use the 'indexOf' method to find the first occurrence of 'needle' in 'haystack'
      * - If 'needle' is found, 'indexOf' returns the starting index of the first match
      * - If 'needle' is not found, 'indexOf' returns -1
      */
    return haystack.indexOf(needle);
};

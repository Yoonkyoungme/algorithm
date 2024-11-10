/**
 * @param {string} s
 * @param {string} t
 * @return {boolean} - return true if s is a subsequence of t, or false otherwise
 */
const isSubsequence = function(s, t) {
  let sIndex = 0;
  let tIndex = 0;

    while (sIndex < s.length && tIndex < t.length) {
        if (t[tIndex] === s[sIndex]) {
            sIndex++;
        }
        
        tIndex++;
    }

    return sIndex === s.length;
};
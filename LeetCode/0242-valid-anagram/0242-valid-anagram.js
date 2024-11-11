/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const counts = {};

    for (let alphabet of s) {
        counts[alphabet] = (counts[alphabet] || 0 ) + 1
    }

    for (let alphabet of t) {
        if (!counts[alphabet]) {
            return false;
        }
        
        counts[alphabet] -= 1;
    }

    return true;
};
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    const alphabetMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (alphabetMap.has(s[i])) {
            const value = alphabetMap.get(s[i]);
            if (value !== t[i]) {
                return false;
            }
        } else {
            alphabetMap.set(s[i], t[i]);
        }
    }

    return true;
};
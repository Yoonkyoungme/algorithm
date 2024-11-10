/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if (sMap.has(s[i])) {
            const value = sMap.get(s[i]);
            if (value !== t[i]) {
                return false;
            }
        } else {
            sMap.set(s[i], t[i]);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (tMap.has(t[i])) {
            const value = tMap.get(t[i]);
            if (value !== s[i]) {
                return false;
            }
        } else {
            tMap.set(t[i], s[i]);
        }
    }

    return true;
};
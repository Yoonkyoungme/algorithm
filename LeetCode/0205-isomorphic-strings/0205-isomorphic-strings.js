/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapS.has(charS)) {
            if (mapS.get(charS) !== charT) {
                return false;
            }
        } else {
            mapS.set(charS, charT);
        }

        if (mapT.has(charT)) {
            if (mapT.get(charT) !== charS) {
                return false;
            }
        } else {
            mapT.set(charT, charS);
        }
    }

    return true;
};
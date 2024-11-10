/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
const wordPattern = function(pattern, s) {
    const splitedS = s.split(" ");

    if (pattern.length !== splitedS.length) {
        return false;
    }
    
    const patterMap = new Map();
    const sMap = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const alpahbet = pattern[i];
        const letter = splitedS[i];

        if (patterMap.has(alpahbet)) {
            if (patterMap.get(alpahbet) !== letter) {
                return false;
            }
        } else {
            patterMap.set(alpahbet, letter);
        }

        if (sMap.has(letter)) {
            if (sMap.get(letter) !== alpahbet) {
                return false;
            }
        } else {
            sMap.set(letter, alpahbet);
        }
    }

    return true;
};


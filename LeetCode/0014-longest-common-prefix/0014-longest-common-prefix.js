/**
 * @param {string[]} strs
 * @return {string}
 */

const longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);

            if (prefix === "") return "";
        }
    }

    return prefix;
};

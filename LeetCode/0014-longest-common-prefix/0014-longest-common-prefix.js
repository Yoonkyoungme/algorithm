/**
 * @param {string[]} strs
 * @return {string}
 */

function findPrefixes(str) {
    let currentPrefix = "";
    const prefixes = [];

    for (let i = 0; i < str.length; i++) {
        currentPrefix += str[i]; 
        prefixes.push(currentPrefix); 
    }

    return prefixes;
}


const longestCommonPrefix = function(strs) {
    
    // 1. find all prefixes
    let allPrefixes = [];

    for (let i = 0; i < strs.length; i++) {
        const prefixes = findPrefixes(strs[i]);
        allPrefixes = [...allPrefixes, ...prefixes];
    }

    allPrefixes = [...new Set(allPrefixes)];

    // 2. find common prefix
    const commoonPrefixs = [];

    allPrefixes.forEach((prefix) => {
        const isPrefixCommon = strs.every((str) => str.startsWith(prefix));

        if (isPrefixCommon) {
            commoonPrefixs.push(prefix);
        }
    })



    // 3. find longest common prefix
    if (commoonPrefixs.length === 0) {
        return "";
    }

    const results = commoonPrefixs.sort(); // ascending order
    return results.at(-1);
};
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const mergeAlternately = function(word1, word2) {
    const word1Length = word1.length;
    const word2Length = word2.length;
    const commonCount = Math.min(word1Length, word2Length);

    let results = "";
    let index = 0;

    while (index < commonCount) {
        results += word1[index];
        results += word2[index];

        index++;
    }

    if (word1Length > commonCount) {
        results += word1.slice(commonCount);
    } else if (word2Length > commonCount) {
        results += word2.slice(commonCount);
    }

    return results;
};
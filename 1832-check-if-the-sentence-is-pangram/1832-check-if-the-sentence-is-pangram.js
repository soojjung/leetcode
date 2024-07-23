/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const hashMap = new Map();

    for (let i = 0; i < sentence.length; i++) {
        if (!hashMap.has(sentence[i])) {
            hashMap.set(sentence[i], 1)
        }
    }
    return (hashMap.size === 26)
};
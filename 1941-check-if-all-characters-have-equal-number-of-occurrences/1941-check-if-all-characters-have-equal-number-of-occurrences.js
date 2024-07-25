/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    const hashMap = new Map();
    for (const letter of s) {
        hashMap.set(letter, (hashMap.get(letter) || 0) + 1)
    }

    const values = [...hashMap.values()]
    for (let i = 1; i<values.length; i++) {
        if (values[i] !== values[i-1]) {
            return false;
        }
    }
    return true;
};
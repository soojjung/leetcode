/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const hashMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (hashMap.has(s[i])) {
            return s[i]
        }
        hashMap.set(s[i], 1)
    }
};
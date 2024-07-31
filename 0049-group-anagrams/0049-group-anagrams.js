/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hashMap = new Map();
    for (const word of strs) {
        const key = word.split('').sort().join('');
        if (hashMap.has(key)) {
            hashMap.set(key, [...hashMap.get(key), word]);
        } else {
            hashMap.set(key, [word]);
        }
    }

    return [...hashMap.values()];
};
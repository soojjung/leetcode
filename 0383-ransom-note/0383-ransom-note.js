/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomNoteMap = constructMap(ransomNote)
    const magazineMap = constructMap(magazine)

    for (const [key, value] of ransomNoteMap) {
        if (!magazineMap.has(key) || magazineMap.get(key) < value) {
            return false;
        }
    }
    return true
};    

const constructMap = (word) => {
    const map1 = new Map();
    word.split('').forEach(letter => {
        if (map1.has(letter)) {
            map1.set(letter, map1.get(letter) + 1)
        } else {
            map1.set(letter, 1)
        }
    })
    return map1
}

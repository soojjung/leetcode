/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function(arr) {
    let count = 0;
    const hashMap = new Map();
    for (const n of arr) {
        hashMap.set(n, (hashMap.get(n) || 0) + 1);
    }
    
    for (let [key, value] of hashMap) {
        if (hashMap.has(key + 1)) {
            count += value;
        }     
    }
    return count;
};
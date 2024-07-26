/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const hashMap = new Map();

    for (let n of nums) {
        hashMap.set(n, (hashMap.get(n) || 0) + 1);
    }

    const ones = []
    hashMap.forEach((value, key) => {
        if (value === 1) {
            ones.push(key)
        }
    })

    return ones.sort((a, b) => b - a)[0] || -1
};
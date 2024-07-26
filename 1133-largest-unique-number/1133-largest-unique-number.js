/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function(nums) {
    const hashMap = new Map();
    let max = -1;

    for (let n of nums) {
        hashMap.set(n, (hashMap.get(n) || 0) + 1);
    }

    for (let [key, value] of hashMap) {
        if (value === 1) {
            max = Math.max(max, key);
        }
    }

    return max;
};
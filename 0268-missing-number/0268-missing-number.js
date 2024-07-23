/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const hashMap = new Map();

    for (const n of nums) {
        hashMap.set(n, 1)
    }

    for (let i = 0; i <= nums.length; i++) {
        if (!hashMap.has(i)) {
            return i
        }
    }
    
};
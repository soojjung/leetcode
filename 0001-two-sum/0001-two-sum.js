/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if (hashMap.has(complement)) {
            return [i, hashMap.get(complement)]
        }
        hashMap.set(nums[i], i);
    }
    return [-1, -1];
};
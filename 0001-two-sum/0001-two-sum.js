/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const subI = nums.indexOf(target - nums[i])
        if (subI > -1 && subI !== i) {
            sub = nums.indexOf(target - nums[i])
            return [i, sub]
        }
    }
};
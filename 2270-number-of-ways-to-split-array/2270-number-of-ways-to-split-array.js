/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let count = 0;
    const total = nums.reduce((acc, cur) => acc + cur, 0)
    let leftSum = 0

    for (let i = 0; i < nums.length -1; i++) {
        leftSum += nums[i];
        if (leftSum >= total - leftSum) {
            count ++;
        }
    }
    return count
};
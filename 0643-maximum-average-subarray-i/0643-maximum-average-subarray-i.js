/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let left = 0;
    let averages = []
    let sum = 0;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]
        if (right - left + 1 === k) {
            averages.push(sum / k)
            sum -= nums[left]
            left ++;
        }
    }
    return Math.max(...averages)
};
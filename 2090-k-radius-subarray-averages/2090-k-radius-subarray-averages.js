/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var getAverages = function(nums, k) {
    const avgs = [];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        if (i < k) {
            avgs.push(-1)
        } else if (i >= 2 * k) {
            avgs.push(Math.floor(sum / (2*k + 1)))
            sum -= nums[i - (2 * k)]
            if (i === nums.length -1) {
                for (j = 0; j<k; j++) {
                    avgs.push(-1)
                }
            }
        } else if (i === nums.length -1) {
            avgs.push(-1)
        }
    }
    return avgs
};
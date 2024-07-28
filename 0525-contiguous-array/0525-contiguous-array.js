/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const hashMap = new Map();
    let sum = 0;
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i] === 0 ? -1 : 1;

        if (sum === 0) {
            ans = i + 1;
        }
        else if (hashMap.has(sum)) {
            ans = Math.max(ans, i - hashMap.get(sum))
        } else {
            hashMap.set(sum, i)
        }
    }

    return ans;
};
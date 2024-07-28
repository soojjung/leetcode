/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let max = 0;
    const arr = [0];

    for (let i = 0; i < nums.length -1; i++) {
        if (nums[i] !== nums[i+1]) {
            max += 2;
            i++;
            arr.push(max);
            continue;
        }
        if (nums[i] === nums[i+1]) {
            arr.push(max);
            max = 0;
        }
    }

    return Math.max(...arr);
};
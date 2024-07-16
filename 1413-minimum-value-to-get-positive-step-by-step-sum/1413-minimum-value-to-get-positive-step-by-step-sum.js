/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function(nums) {
    const initialValue = 0;
    let minSum = 100;

    nums.reduce((acc, cur) => {
        minSum = Math.min(minSum, acc + cur)
        return acc + cur
    }, initialValue)
  
    return minSum < 1 ? 1 - minSum : 1
};
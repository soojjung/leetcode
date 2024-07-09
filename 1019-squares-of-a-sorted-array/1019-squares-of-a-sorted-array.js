/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = new Array(nums.length).fill(0);
  let start = 0;
  let end = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (Math.abs(nums[start]) > Math.abs(nums[end])) {
      result[i] = nums[start] ** 2;
      start++;
    } else {
      result[i] = nums[end] ** 2;
      end--;
    }
  }
  return result;
};
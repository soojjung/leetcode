/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    const intersection = nums.reduce((acc, cur) => {
        const set1 = new Set(acc);
        const set2 = new Set(cur);
        return [...set1].filter(item => set2.has(item));
    })
    return intersection.sort((a, b) => a - b)
};
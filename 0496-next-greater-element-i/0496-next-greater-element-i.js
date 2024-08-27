/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const stack = [];
    const answer = new Array(nums1.length).fill(-1);
    for (let i = 0; i < nums1.length; i++) {
        const idx = nums2.indexOf(nums1[i])
        if (idx > -1) {
            for (let j = idx+1; j < nums2.length; j++) {
                if (nums2[j] > nums1[i]) {
                    answer[i] = nums2[j];
                    break;
                }
            }
        }
    }
    return answer;
};
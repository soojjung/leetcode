/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        hashMap.set(nums[i], (hashMap.get(nums[i]) || 0) + 1);
       
    }
    
    let sum = 0;
    hashMap.forEach((value, key) => {
        if (value === 1) {
            sum += key;
        }
    } )

    return sum;
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let count = 0
    for(let x of nums) {
        if (x === 1) {
            count++;
            if (count > max) {
                max = count
            }
        }    
        else {
            count = 0  
        }  
    }
    return max
};
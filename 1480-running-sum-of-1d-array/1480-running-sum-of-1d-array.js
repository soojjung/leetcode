/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    const initialValue = 0;
    const arr = []
    nums.reduce(
    (accumulator, currentValue) => {
        const sum = accumulator + currentValue
        arr.push(sum)
        return sum
        }, initialValue)
    return arr
    

console.log(sumWithInitial);
    
};
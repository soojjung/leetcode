/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(accounts) {
    const sums = accounts.map(customer => 
         customer.reduce((accumulator, currentValue) => accumulator + currentValue,
         0))
    return Math.max(...sums)
};



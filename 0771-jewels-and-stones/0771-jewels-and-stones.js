/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let stone of stones) {
        for (let jewel of jewels) {
            if (stone === jewel) {
                count ++;
            }
        }
    }
    return count;
};
/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const hashMap = new Map();
    const winners = [];
    const losers = [];

    matches.forEach(match => {
        hashMap.set(match[0], (hashMap.get(match[0]) || 0));
        hashMap.set(match[1], (hashMap.get(match[1]) || 0) + 1);
    });

    for (let [key, value] of hashMap) {
        if (value === 0) {
            winners.push(key);
        }
        if (value === 1) {
            losers.push(key);
        }
    }

    return [winners.sort((a,b) => a - b), losers.sort((a, b) => a - b)]
};
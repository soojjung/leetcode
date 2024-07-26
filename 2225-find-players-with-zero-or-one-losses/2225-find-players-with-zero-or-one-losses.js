/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function(matches) {
    const hashMap = new Map();
    const winners = [];
    const secondWins = [];

    matches.forEach(match => {
        hashMap.set(match[0], (hashMap.get(match[0]) || 0));
        hashMap.set(match[1], (hashMap.get(match[1]) || 0) + 1);
    });

    for (let [key, value] of hashMap) {
        if (value === 0) {
            winners.push(key);
        }
        if (value === 1) {
            secondWins.push(key);
        }
    }

    return [winners.sort((a,b) => a - b), secondWins.sort((a, b) => a - b)]
};
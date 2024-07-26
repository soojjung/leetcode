/**
 * @param {string} text
 * @return {number}
 */

const obj = {a: 1, b: 1, n: 1, l: 2, o: 2}

var maxNumberOfBalloons = function(text) {
    const hashMap = new Map();
    Object.keys(obj).map(key => hashMap.set(key, 0));

    for (let t of text) {
        hashMap.set(t, (hashMap.get(t)) + 1);
    }

    let round = 10000;
    hashMap.forEach((value, key) => {
        if (obj[key]) {
            round = Math.min(round, Math.floor(value / obj[key]));
        }
    })

    return round === 10000 ? 0 : round;
};
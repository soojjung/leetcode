/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = Array.from({length: n}, (v, i) => i+1);
    return arr.map(i => loop(i))
};

const loop = (n) => {
    if (n % 15 === 0) {
        return 'FizzBuzz'
    }
    if (n % 3 === 0) {
        return 'Fizz'
    }
    if (n % 5 === 0) {
        return 'Buzz'
    }
    return `${n}`
}
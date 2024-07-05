/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = Array.from({length: n}, (v, i) => i+1);
    return arr.map(i => loop(i))
};

const loop = (n) => {
    let myString = '';
    if (n % 3 === 0) {
        myString += 'Fizz'
    }
    if (n % 5 === 0) {
        myString += 'Buzz'
    }
    if (myString === '') {
        myString = `${n}`
    }
    return myString
}
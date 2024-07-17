/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(' ');
    let newString = ''

    for (let i =0; i<arr.length; i++) {
        newString += arr[i].split('').reverse().join('') + ' '
    }
    return newString.trim()
};
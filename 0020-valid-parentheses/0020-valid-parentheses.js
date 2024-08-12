/**
 * @param {string} s
 * @return {boolean}
 */


const left = ["(", "[", "{"];
const right = [")", "]", "}"];

var isValid = function(s) {
    const arr = [];

    if (left.indexOf(s[0]) < 0) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
           
        if (left.indexOf(s[i]) > -1) {
            arr.push(s[i]);
        }
       
        else if (right.indexOf(s[i]) > -1) {
            if (right.indexOf(s[i]) === left.indexOf(arr[arr.length -1])) {
                arr.pop();
            } else {
                return false;
            }
        }
    }
    return arr.length === 0;
};
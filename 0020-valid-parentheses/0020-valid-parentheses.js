/**
 * @param {string} s
 * @return {boolean}
 */


const left = ["(", "[", "{"];
const right = [")", "]", "}"];

var isValid = function(s) {
    const stack = [];

    if (left.indexOf(s[0]) < 0) {
        return false;
    }
    
    for (let i = 0; i < s.length; i++) {
           
        if (left.indexOf(s[i]) > -1) {
            stack.push(s[i]);
        }
       
        else if (right.indexOf(s[i]) > -1) {
            if (right.indexOf(s[i]) === left.indexOf(stack[stack.length -1])) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};
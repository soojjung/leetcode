/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const hashSet = new Set();
    let index = 0;
    let maxSubLength = 0;

    for (let i = 0; i < s.length; i++) {
        let key = s[i];
        while (hashSet.has(key)) {
            hashSet.delete(s[index]);
            index++;
        }
        hashSet.add(key);
        maxSubLength = Math.max(maxSubLength, hashSet.size); 
    }
    return maxSubLength;
};
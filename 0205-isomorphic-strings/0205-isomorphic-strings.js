/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    return getString(s) === getString(t);
};

const getString = (st) => {
    const hashMap = new Map();
    let index = 0;
    let string = "";
    for (let i = 0; i < st.length; i++) {
        if (!hashMap.has(st[i])) {
            hashMap.set(st[i], index);
            index++;
        }
        string += `${hashMap.get(st[i])},`;
    }
    return string;
}
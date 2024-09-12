/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    const dfs = (node) => {
        if (!node) {
            return;
        }

        dfs(node.left);
        values.push(node.val);
        dfs(node.right);
    }

    let values = [];
    dfs(root);

    let ans = 10**5;
    for (let i = 1; i < values.length; i++) {
        ans = Math.min(ans, values[i] - values[i-1]);
    }
    
    return ans;
};
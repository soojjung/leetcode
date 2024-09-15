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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const dfs = (node, small, large) => {
        if (!node) {
            return true;
        }

        if (small >= node.val || node.val >= large) {
            return false;
        }

        let left = dfs(node.left, small, node.val);
        let right = dfs(node.right, node.val, large);
        
        return left && right;
    }
    
    return dfs(root, -Infinity, Infinity);
};
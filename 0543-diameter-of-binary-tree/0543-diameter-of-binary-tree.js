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
var diameterOfBinaryTree = function(root) {
    const calculateDiameterAndDepth = (node, result) => {
        if (!node) {
            return 0;
        }
        
        const leftDepth = calculateDiameterAndDepth(node.left, result);
        const rightDepth = calculateDiameterAndDepth(node.right, result);

        result[0] = Math.max(result[0], leftDepth + rightDepth);
        
        return Math.max(leftDepth, rightDepth) + 1;
    }
    
    const result = [0];

    calculateDiameterAndDepth(root, result);

    return result[0];
};
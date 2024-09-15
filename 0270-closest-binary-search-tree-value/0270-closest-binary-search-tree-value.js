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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let value = root.val;

    while (root !== null) {
        if (Math.abs(root.val - target) < Math.abs(value - target) ||
            (Math.abs(root.val - target) === Math.abs(value - target) && root.val < value)) {
            value = root.val;
        }

        root = (target < root.val) ? root.left : root.right;
    }
    
    return value;
};
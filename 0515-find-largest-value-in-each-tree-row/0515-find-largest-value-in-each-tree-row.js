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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) {
        return [];
    }

    let ans = [];
    let queue = [root];

    while (queue.length) {
        let currentLength = queue.length;
        let currMax = Math.pow(-2, 31);
        let nextQueue = [];

        for (let i = 0; i < currentLength; i++) {
            let node = queue[i];
            currMax = Math.max(currMax, node.val);
            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        }

        ans.push(currMax);
        queue = nextQueue;
    }
    
    return ans;
};
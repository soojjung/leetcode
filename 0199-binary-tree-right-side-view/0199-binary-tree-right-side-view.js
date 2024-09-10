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
var rightSideView = function(root) {
    if (!root) {
        return [];
    }

    const ans = [];
    let queue = [root];

    while (queue.length) {
        let nodesInCurrentLevel = queue.length;
        const nextQueue = [];

        ans.push(queue[queue.length - 1].val); // this is the rightmost node value for the current level
        for (let i = 0; i < nodesInCurrentLevel; i++) {
            let node = queue[i];
            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        }

        queue = nextQueue;
    }

    return ans;
};
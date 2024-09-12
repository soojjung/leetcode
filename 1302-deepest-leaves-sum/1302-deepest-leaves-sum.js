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
var deepestLeavesSum = function(root) {
    if (!root) {
        return 0;
    }

    let queue = [root];
    let currentSum = 0;
    let deepestLevelSum = 0;

    while (queue.length) {
        let nodesInCurrentLevel = queue.length;
        let nextQueue = [];

        for (let i = 0; i < nodesInCurrentLevel; i++) {
            const node = queue[i];
            currentSum += node.val;

            if (node.left) {
                nextQueue.push(node.left);
            }
            if (node.right) {
                nextQueue.push(node.right);
            }
        }

        deepestLevelSum = currentSum;
        currentSum = 0;
        queue = nextQueue;
    }

    return deepestLevelSum;
};
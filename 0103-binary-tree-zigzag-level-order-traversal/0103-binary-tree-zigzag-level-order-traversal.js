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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) {
        return [];
    }
    
    let queue = [root];
    let result = [];
    let level = 0;

    while (queue.length) {
        let size = queue.length;
        let nextQueue = [];

        for (let i = 0; i < size; i++) {
            let node = queue.shift(); // queue에는 tree 순서대로 (left -> right)
            nextQueue.push(node.val); // result에는 L->R, R->L 번갈아가면서

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        if (level % 2 === 1) {
            nextQueue.reverse();
        }
        result.push(nextQueue);
        level++;
    }

    return result;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let dummy = head.next;
    let prev = null;

    while (head && head.next) {
        if (prev) {
            prev.next = head.next;
        }
        prev = head;

        let nextNode = head.next.next;
        head.next.next = head;

        head.next = nextNode;
        head = nextNode;
    }

    return dummy;
};
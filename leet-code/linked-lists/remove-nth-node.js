/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // if last item, remove it
    if (n === 1) {
        head = pop(head);
        return head;
    }

    // reverse list
    head = reverseList(head);

    // remove nth node in reversed list
    let prev = head;
    let curr = head;
    for (let i = 1; i < n; i++) {
        prev = curr;
        curr = curr.next;
    }
    prev.next = curr.next;
    curr.next = null;

    // reverse back
    head = reverseList(head);
    console.log(head);
    return head;
};

const reverseList = (head) => {
    let prev = null;
    let curr = head;
    let next = null;

    while (curr.next) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    curr.next = prev;
    return curr;
};

const pop = (head) => {
    let temp = head;
    let prev = head;

    if (head.next === null) {
        head = null;
        return head;
    }

    while (temp.next) {
        prev = temp;
        temp = temp.next;
    }

    prev.next = null;
    return head;
};

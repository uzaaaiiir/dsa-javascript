/**
 * Array Implementation O(n)
 * - Requires adding at one end & removing at other end.
 * - Adding/removing from beginning is O(n).
 * - Adding/removing from end is O(1).
 *
 * Singly-Linked List O(1)
 * - Adding/removing from beginning is O(1).
 * - Adding to end is O(n).
 * - Removing from end is O(1)
 * - Can enqueue at the beginning, and dequeue at end => O(1)
 */

class Node {
    next;
    value;

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Representing a Queue with a Linked List.
 * - Add to beginning of List. Last represents end of Queue where items are added.
 * - Remove from end of List. First represents beginning of Queue where items are removed.
 */
class Queue {
    first;
    last;
    length;

    constructor(value) {
        if (value !== null || value !== undefined) {
            const node = new Node(value);
            this.first = this.last = node;
            this.length = 1;
        }
    }

    /**
     * Enqueues an item to the end of the list (represented by beginning of LinkedList).
     *
     * @params {any} value
     * @returns {Queue} queue
     */
    enqueue(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.first = this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }

        this.length++;
        return this;
    }

    /**
     * Dequeues an item from beginning of list (represented by end of LinkedList).
     *
     * @returns {Node} node
     */
    dequeue() {
        if (!this.first || this.length === 0) return undefined;

        const temp = this.first;
        this.first = this.first.next;
        temp.next = null;

        if (this.length === 1) this.last = null;

        this.length--;
        return temp;
    }

    print() {
        let temp = this.first;

        console.log(`First ${this.first?.value}`);

        for (let i = 0; i < this.length; i++) {
            console.log(`Current ${temp?.value}, next ${temp?.next?.value}`);
            temp = temp.next;
        }

        console.log(`Last ${this.last?.value}`);
        console.log(`Length ${this.length}`);
    }
}

const queue = new Queue(5);
queue.enqueue(25);
queue.dequeue();
queue.dequeue();
queue.enqueue(123);
queue.print();

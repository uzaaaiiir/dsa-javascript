class Node {
    value;
    next;

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

/**
 * Class representing a Stack.
 * - When representing stack, we need to add and remove from beginning
 * of stack if using a singly linked list. Otherwise, we need to traverse
 * entire list to remove or add item and would be O(n).
 * - If using singly-linked list, adding/removing from beginning is O(1).
 * - If using array, adding/removing from end is O(1). From beginning is O(n).
 */
class Stack {
    top;
    length;

    constructor(value) {
        if (!(value === undefined || value === null)) {
            this.top = new Node(value);
            this.length = 1;
        }
    }

    /**
     * Adds an item to the top of the stack
     * @param {any} value
     * @returns Stack
     */
    push(value) {
        const node = new Node(value);

        if (!this.top) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }

        this.length++;
        return this;
    }

    /**
     * Removes an item from the top of the stack
     * @returns Node - which is removed
     */
    pop() {
        if (!this.top || this.length === 0) return undefined;

        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;

        this.length--;
        return temp;
    }

    print() {
        let curr = this.top;
        for (let i = 0; i < this.length; i++) {
            console.log(`Current ${curr.value}, next ${curr?.next?.value}`);
            curr = curr.next;
        }

        console.log(`Length ${this.length}`);
    }
}

const myStack = new Stack(5);
myStack.push(7);
myStack.pop();
myStack.pop();
myStack.push(12);
myStack.pop();
myStack.print();

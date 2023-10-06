"use strict";

class Node {
    value;
    next;

    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head = null;
    tail = null;
    length = 0;

    constructor(value) {
        if (!(value === undefined || value === null)) {
            this.head = new Node(value);
            this.tail = this.head;
            this.length = 1;
        }
    }

    getLength() {
        return this.length;
    }

    /**
     * Method pushes a Node to the end of the list.
     * @param {*} value
     * @returns LinkedList
     */
    push(value) {
        const node = new Node(value);

        if (this.head === null) {
            // If empty list
            this.head = node;
            this.tail = this.head;
        } else {
            // Point previous tail to new node
            this.tail.next = node;

            // Move tail to new node (end of list)
            this.tail = node;
        }

        this.length++;
        return this;
    }

    /**
     * Methods removes a Node from the end of the list.
     * @returns Node
     */
    pop() {
        // Empty list
        if (!this.head) return undefined;

        // Temps to iterate through list
        let temp = this.head;
        let pre = this.head;

        // While next exists, continue through
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        // Set tail to second last node
        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    /**
     * Method adds a Node to the beginning of the list.
     * @param {*} value
     * @returns LinkedList
     */
    unshift(value) {
        const node = new Node(value);

        if (!this.head) {
            // If empty list
            this.head = node;
            this.tail = node;
        } else {
            // Non-empty list
            node.next = this.head;
            this.head = node;
        }

        this.length++;

        return this;
    }

    /**
     * Method removes a Node from the beginning of the list.
     * @returns Node
     */
    shift() {
        // Empty list
        if (!this.head) return undefined;

        const temp = this.head;

        // Move head over
        this.head = this.head.next;

        // Detach temp from rest of list
        temp.next = null;

        this.length--;

        // If list with one item
        if (this.length === 0) this.tail = null;

        return temp;
    }

    /**
     * Method retrieves the Node at the specified index.
     * @param {int} index
     * @returns Node
     */
    get(index) {
        // Boundary conditions
        if (index < 0 || index >= this.length) return undefined;

        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }

        return temp;
    }

    /**
     * Method replaces a value of a Node at the specified index.
     * @param {int} index
     * @param {int} value
     * @returns LinkedList
     */
    set(index, value) {
        // Boundary conditions
        if (index < 0 || index >= this.length) return undefined;

        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }

        // Can also remove above code and use: const curr = this.get(index)

        curr.value = value;

        return this;
    }

    /**
     * Method inserts a Node with the given value at the specified index.
     * @param {int} index
     * @param {int} value
     * @returns LinkedList
     */
    insert(index, value) {
        // Boundary conditions
        if (index < 0 || index > this.length) return undefined;

        // Insert at head
        if (index === 0) return this.unshift(value);

        // Insert at tail
        if (index === this.length) return this.push(value);

        // Insert in middle
        let curr = this.get(index - 1);
        const node = new Node(value);

        // Fix pointers
        node.next = curr.next;
        curr.next = node;
        this.length++;

        return this;
    }

    /**
     * Methods removes and returns the Node at the specified index.
     * @param {int} index
     * @returns Node
     */
    remove(index) {
        // Boundary conditions
        if (index < 0 || index >= this.length) return undefined;

        // Remove from head
        if (index === 0) return this.shift();

        // Remove from tail
        if (index === index - 1) return this.pop();

        // Remove from middle
        const pre = this.get(index - 1);
        const temp = pre.next;

        // Re-arrange pointers
        pre.next = temp.next;
        temp.next = null;

        // Decrement length
        this.length--;

        return temp;
    }

    reverse() {
        // Switch head and tail
        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        // Go from tail to head while switching the pointers
        let prev = null;
        let curr = this.tail;
        let next = null;

        for (let i = 0; i < this.length; i++) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        return this;
    }

    printList() {
        let curr = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}

// const list = new LinkedList(11);
// list.push(5);
// list.push(332);
// list.push(15);
// list.push(432);
// list.push(10);

// console.log(list.reverse());
// console.log(list);
// console.log(
//     list.get(0).value,
//     list.get(1).value,
//     list.get(2).value,
//     list.get(3).value,
//     list.get(4).value,
//     list.get(5).value
// );

// list.printList();

module.exports.LinkedList = LinkedList;

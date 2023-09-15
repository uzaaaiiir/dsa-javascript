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

    pop() {
        if (this.head === null) {
            throw new Error("List is empty.");
        }

        if (this.length === 1) {
            const node = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        }

        const nodeToRemove = this.tail;
        let presentNode = this.head;
        for (let i = 0; i < this.length; i++) {
            presentNode = presentNode.next;
            if (presentNode.next === nodeToRemove) {
                presentNode.next = null;
                this.tail = presentNode;
                this.length--;
                break;
            }
        }

        return nodeToRemove;
    }
}

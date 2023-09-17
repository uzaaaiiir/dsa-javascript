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
        if (!this.head) return undefined;

        let temp = this.head;
        let pre = this.head;

        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;

        return this;
    }
}

const list = new LinkedList(11);
list.push(23);
list.push(7);
list.unshift(4);
console.log(list);

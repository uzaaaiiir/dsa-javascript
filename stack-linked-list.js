const { LinkedList } = require("./linked-list");

class Stack {
    stack;

    constructor(value) {
        this.stack = new LinkedList(value);
    }

    push(value) {
        this.stack.unshift(value);
    }

    pop() {
        this.stack.shift();
    }

    print() {
        this.stack.printList();
    }
}

const list = new Stack(5);
list.push(33);
list.push(3333);
list.print();
list.pop();
list.print();

const { LinkedList } = require("./linked-list");

class Stack {
    stack;

    constructor(value) {
        this.stack = new LinkedList(value);
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        this.stack.pop();
    }

    print() {
        this.stack.printList();
    }
}

const list = new Stack(5);
list.push(33);
list.pop();
list.print();

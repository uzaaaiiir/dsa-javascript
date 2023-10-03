class Node {
    value;
    prev;
    next;

    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    head;
    tail;
    length = 0;

    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        // Create new Node
        const node = new Node(value);

        // If empty, point both to new Node
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        // if empty, return undefined
        if (!this.length) return undefined;

        const temp = this.tail;
        if (this.length === 1) {
            // if length 1; point head and tail to null, return node
            this.head = this.tail = null;
        } else {
            // if length > 1; re-arrange pointers
            this.tail = this.tail.prev;
            temp.prev = null;
            this.tail.next = null;
        }

        this.length--;
        return temp;
    }

    print() {
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(
                `prev ${node?.prev?.value}, Current Value: ${node.value}, next: ${node?.next?.value}`
            );
            node = node.next;
        }
    }
}

let list = new DoublyLinkedList(7);
list.push(12);
list.push(1);
list.pop();
list.pop();
list.pop();
list.print();
console.log(list);

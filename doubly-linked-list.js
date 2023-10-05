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

    /**
     * Method adds a node to the end of doubly-linked list.
     * @param {any} value
     * @returns DoublyLinkedList
     */
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

    /**
     * Method removes a node from the end of the doubly-linked list.
     * @returns Node
     */
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

    /**
     * Method adds a node to the beginning of a doubly-linked list.
     * @param {any} value
     * @returns DoublyLinkedList
     */
    unshift(value) {
        const node = new Node(value);

        if (!this.head) {
            // If empty list, return undefined
            this.head = this.tail = node;
        } else {
            // Adjust pointers
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }

        this.length++;
        return this;
    }

    /**
     * Method removes a node from the beginning of a doubly-linked list.
     * @returns Node
     */
    shift() {
        // empty list
        if (!this.head) return undefined;

        const temp = this.head;
        if (this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    /**
     * Method retrieves the Node at the specified index.
     * @param {int} index
     * @returns Node
     */
    get(index) {
        if (!this.head || index >= this.length) return undefined;

        let temp = this.head;
        for (let i = 0; i < index - 1; i++) {
            temp = temp.next;
        }

        return temp.value;
    }

    /**
     * Method replaces a value of a Node at the specified index.
     * @param {int} index
     * @param {any} value
     * @returns DoublyLinkedList
     */
    set(index, value) {
        if (!this.head) return undefined;
        return this;
    }

    /**
     * Method inserts a Node with the given value at the specified index.
     * @param {int} index
     * @param {int} value
     * @returns DoublyLinkedList
     */
    insert(index, value) {
        if (index < this.length) return undefined;
        return this;
    }

    /**
     * Methods removes and returns the Node at the specified index.
     * @param {int} index
     * @returns Node
     */
    remove(index) {
        if (index < this.head) return undefined;
    }

    print() {
        let node = this.head;
        for (let i = 0; i < this.length; i++) {
            console.log(
                `prev ${node?.prev?.value}, Current Value: ${node.value}, next: ${node?.next?.value}`
            );
            node = node.next;
        }

        console.log(`Length: ${this.length}`);
    }
}

let list = new DoublyLinkedList(7);
list.push(12);
list.unshift(343);
console.log(list.get(2));
// list.print();

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
        if (!this.head || index >= this.length || index < 0) return undefined;

        let temp = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev;
            }
        }

        return temp;
    }

    /**
     * Method replaces a value of a Node at the specified index.
     * @param {int} index
     * @param {any} value
     * @returns boolean - returning if the value was set
     */
    set(index, value) {
        let temp = this.get(index);

        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    /**
     * Method inserts a Node with the given value at the specified index.
     * @param {int} index
     * @param {int} value
     * @returns DoublyLinkedList
     */
    insert(index, value) {
        if (!this.head || index > this.length || index < 0) return undefined;

        if (index === this.length) return this.push(value);

        if (index === 0) return this.unshift(value);

        // Create new node
        const node = new Node(value);

        // Re-arrange existing node
        const next = this.get(index);
        const prev = next.prev;
        prev.next = node;
        next.prev = node;

        // Set new node next & prev
        node.prev = prev;
        node.next = next;

        this.length++;
        return this;
    }

    /**
     * Methods removes and returns the Node at the specified index.
     * @param {int} index
     * @returns Node
     */
    remove(index) {
        if (!this.head || index < 0 || index >= this.length) return undefined;

        if (index === 0) return this.shift();

        if (index === this.length - 1) return this.pop();

        const temp = this.get(index);
        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;
        temp.next = temp.prev = null;

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

        console.log(`Length: ${this.length}`);
    }
}

let list = new DoublyLinkedList(7);
list.push(12);
list.unshift(343);
list.remove(1);
list.print();

/**
 * Trees
 *
 * Binary Tree
 * - Each node has two children at most: left and right
 * - Full Tree: each node either has two children or 0 children
 * - Perfect Tree: every line is perfectly filled across that height of the tree
 * - Complete Tree: lowest level is filled from the left most side, and the rest are perfect
 *
 * - Parent Node
 * - Child Node
 * - Leaf Node - node with no children
 *
 * Binary Search Tree (BST)
 * - If value is greater than parent node, it goes to the right, otherwise to the left.
 * - Perfect Tree has 2^n -1 nodes - where n is the height
 * - BEST CASE: O(logn) = O(h) to find, add, remove [divide and conquer]
 * - WORST CASE: O(n) - all items are larger than parent node becomes linked list (47 -> 76 -> 82 ->  91)
 */

class Node {
    left;
    right;
    value;

    constructor(value) {
        if (value !== null && value !== undefined) {
            this.value = value;
            this.left = this.right = null;
        }
    }
}

class BinarySearchTree {
    root;

    constructor() {
        this.root = null;
    }

    insert(value) {
        const node = new Node(value);
        if (!this.root) {
            this.root = node;
            return this;
        }

        let temp = this.root;
        while (true) {
            if (node.value === temp.value) return undefined;

            if (node.value < temp.value) {
                if (temp.left === null) {
                    temp.left = node;
                    return this;
                }
                temp = temp.left;
            } else {
                if (temp.right === null) {
                    temp.right = node;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    contains(value) {
        if (!this.root) return false;

        let temp = this.root;
        while (temp) {
            if (value === temp.value) return true;

            temp = value < temp.value ? temp.left : temp.right;
        }

        return false;
    }

    minimum() {
        if (!this.root) return undefined;

        let temp = this.root;
        while (temp.left) {
            temp = temp.left;
        }

        return temp;
    }

    minValueNode(currentNode) {
        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode;
    }
}

const bst = new BinarySearchTree();
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(8);
bst.insert(52);
bst.insert(82);
console.log(bst.contains(52));
console.log(bst.minimum());
console.log(bst.minValueNode(bst.root));
console.log(bst.minValueNode(bst.root.right));
console.log(bst);

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
}

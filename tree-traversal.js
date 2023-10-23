/**
 * Tree Traversal
 * - Breadth First Search (BFS) - In BST, evaluate each height before moving down
 * - Depth First Search (DFS) - In DFS, go to the leaf nodes first, then move up the tree, then move to the right side.
 */

/**
 * Breadth First Search (BFS)
 * - Requires two arrays: queue and results
 * - Start with the root and move it to the queue, then to the results
 * - Go to the left, add to queue, and go to right and add to queue
 * - Remove the left,  go the left & right and add to the array
 * - Remove the rihgt, go to left & right and add to the array
 * - Once queue is empty, all items have been checked
 *
 * Example:
 * Tree: 47, 21, 76, 18, 27, 52, 82
 *
 * Any time a value is added to results, we check the left and
 * right and add the nodes to the queue to be checked.
 *
 * Step 1:
 * Queue: [47]
 * Results: []
 *
 * Step 2:
 * Queue: [21, 76]
 * Results: [47]
 *
 * Step 3:
 * Queue: [76, 18, 27]
 * Results: [47, 21]
 *
 * Step 4:
 * Queue: [18, 27, 52, 82]
 * Results: [47, 21, 76]
 *
 * Step 5: No more child nodes, eventually all get added to results
 * Queue: []
 * Results: [47, 21, 76, 18, 27, 52, 82]
 */

const { BinarySearchTree } = require("./binary-search-tree");

function BFS(bst) {
    let currentNode = bst.root;
    let queue = [];
    let results = [];

    queue.push(currentNode);

    while (queue.length) {
        // If items are in queue, remove the first item
        currentNode = queue.shift();

        // Add item to the results queue
        results.push(currentNode.value);

        // Add the right and left child of the node moved to the queue
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);

        // Will continue until all items have been evaluated
    }

    return results;
}

/**
 * Depth-First Search
 * - Pre-order: middle, left, right
 * - Post-order: left, right, middle
 * - In-Order: left, middle, right
 */

/**
 * PRE-ORDER
 * - Pre-order goes middle node, then left (evaluates all left), then right
 * - Recursive solution
 */

function DFSPreOrder(bst) {
    let results = [];
    function traverse(currentNode) {
        results.push(currentNode.value);
        console.log(results);
        if (currentNode.left) traverse(currentNode.left);
        if (currentNode.right) traverse(currentNode.right);
    }

    traverse(bst.root);
}

/**
 * POST-ORDER
 * - Visit left, right, then middle
 */

/**
 * IN-ORDER
 * - Visit left first, then middle, then right until all are visited
 * - As we visit them, we add to visited array. Then once completed, add to results.
 */

const bst = new BinarySearchTree();
// Tree: 47, 21, 76, 18, 27, 52, 82
bst.insert(47);
bst.insert(21);
bst.insert(76);
bst.insert(18);
bst.insert(27);
bst.insert(52);
bst.insert(82);
// console.log(bst.DFSPreOrder());
console.log(DFSPreOrder(bst));

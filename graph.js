/**
 * Graphs
 * - Vertex: A node in a graph
 * - Edge: Line between two vertices
 *      - Can have weighted edges that indicate how hard it is to travel from that route.
 *
 * Types of Edges
 * - Bi-directional
 * - Uni-directional
 *
 * Representing a Graph:
 ** Adjacency Matrix
 * - Have a matrix indicating which vertices a node has an edge with
 * - Bi-directional matrix will be symmetric across the 45 degree line
 * - Can also store the weights in the matrix if edges are weighted
 *
 ** Adjacency List
 * - Have an object with the nodes as the key, and a list to represent the edges the node connects to
 *
 * Big O
 ** Adjacency Matrix
 * - Space Complexity: O(V^2)
 * - Time Complexity:
 *      - Adding vertex: O(V^2)
 *      - Creating edge: O(1)
 *      - Removing edge: O(1)
 *      - Removing vertex: O(V^2)
 ** Adjacency List
 * - Space Complexity: O(E + V)
 * - Time Complexity:
 *      - Adding vertex: O(1)
 *      - Creating edge: O(1)
 *      - Removing edge: O(E)
 *      - Removing vertex: O(V + E)
 */

class Graph {
    adjacencyList;

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }

        return false;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                (v) => v !== vertex2
            );

            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                (v) => v !== vertex1
            );

            return true;
        }
        return false;
    }

    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) return undefined;
        while (this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }

        delete this.adjacencyList[vertex];
        return this;
    }
}

const graph = new Graph();
console.log(graph.addVertex("A"));
console.log(graph.addVertex("B"));
console.log(graph.addVertex("C"));
console.log(graph.addEdge("A", "B"));
console.log(graph.addEdge("B", "C"));
console.log(graph.addEdge("C", "A"));
// console.log(graph.removeEdge("B", "A"));
// console.log(graph.removeEdge("B", "D"));
console.log(graph.removeVertex("A"));
console.log(graph);

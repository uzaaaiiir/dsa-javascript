/**
 * Hash Tables are key-value pairs
 * - The key is run through a hash function to generate the address/index
 *    where the value is stored.
 * - Hash functions are one-way and deterministic.
 * - We typically use a prime number for the number of address spaces
 *   because it provides a more randomized distribution of mappings.
 *
 * Collissions
 * - When mutiple keys get mapped to the same index/address,
 *   it is referred to as a collission
 * - Different methods to deal with collissions:
 *    - Separate Chaining - putting all the key-value pairs that map to the
 *      same address/index in the same location. Can use linked lists or
 *      arrays.
 *    - Linear Probing - putting values that map to the same address
 *      into the next index.
 *    - Quadratic Probing
 *
 * Big O Notation
 * - Hash is O(1)
 * - set is O(1)
 * - get is O(n) - bc the chain can be as long as n.
 *      - In built-in hashtables, the addresses are randomized and it's O(1)
 * - keys is O(n)
 */

class HashTable {
    dataMap;

    constructor(size = 7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    set(key, value) {
        let index = this._hash(key);

        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }

        this.dataMap[index].push([key, value]);
        return this;
    }

    get(key) {
        let index = this._hash(key);

        if (!this.dataMap[index]) return undefined;

        return this.dataMap[index].find(
            ([searchingKey]) => key === searchingKey
        );
    }

    keys() {
        const keys = [];

        this.dataMap.forEach((arr) => {
            if (arr) {
                arr.forEach((item) => keys.push(item[0]));
            }
        });

        return keys;
    }

    printHashTable() {
        for (let i = 0; i < this.dataMap.length; i++) {
            console.log(`${i}: ${this.dataMap[i] || "Not defined yet."}`);
        }
    }
}

const hashTable = new HashTable();

console.log(hashTable.set("bolts", 1400));
console.log(hashTable.set("washers", 50));
console.log(hashTable.set("lumber", 70));
console.log(hashTable.get("washers"));
hashTable.printHashTable();

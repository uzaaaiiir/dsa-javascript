/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *
 * Brute Force -
 * O(n^2) time complexity, O(n) space
 */
var twoSumBruteForce = function (nums, target) {
    // Size of array is 2
    if (nums.length === 2) return [0, 1];

    // Brute Force
    // O(n^2) -- calculate all sums until indexes found

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length - 1; i++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};

/**
 * Map -
 * Only need to check if the difference between target and each value exists
 * O(n) time and space
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSumMap = function (nums, target) {
    // Size of array is 2
    if (nums.length === 2) return [0, 1];

    const map = new Map();
    const indices = [];
    nums.forEach((val, i) => {
        const diff = target - val;

        if (map.has(diff)) {
            indices.push(i);
            indices.push(map.get(target - val));
        } else {
            map.set(val, i);
        }
    });

    return indices;
};

console.log(twoSumBruteForce([2, 3, 4], 7)); // [1, 2]
console.log(twoSumMap([2, 7, 11, 15], 9)); // [0, 1]

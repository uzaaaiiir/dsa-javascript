/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    if (nums.length === 1) return [nums[0]];

    const map = {};
    const realMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 0;
        }

        map[nums[i]]++;
    }

    const bucket = [];
    for (const [num, freq] of Object.entries(map)) {
        console.log(num, freq);
        bucket[freq] = (bucket[freq] || new Set()).add(parseInt(num));
    }

    const result = [];
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) {
            result.push(...bucket[i]);
        }

        if (result.length === k) break;

        console.log(result);
    }

    return result;
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([1], 1));
console.log(topKFrequent([1, 2], 2));

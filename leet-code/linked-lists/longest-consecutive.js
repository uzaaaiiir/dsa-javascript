/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const set = new Set(nums);
    const map = {};

    for (const num of set) {
        map[num] = true;
    }
    console.log(map);

    let count = 1;
    let currMax = 0;
    for (let [key, val] of Object.entries(map)) {
        if (!map[parseInt(key) + 1]) {
            let current = key;

            while (map[--current]) {
                console.log(current, map[current]);
                count++;
            }
            currMax = count > currMax ? count : currMax;
            count = 1;
        }
    }

    return currMax;
};

const data1 = [100, 4, 200, 1, 3, 2];
const data2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const data3 = [1, 0, -1];
const data4 = [-8, -2, -3, -9, -6, 7, 9, -8, 9, 2, -8];

console.log(longestConsecutive(data1));
console.log(longestConsecutive(data2));
console.log(longestConsecutive(data3));
console.log(longestConsecutive(data4));

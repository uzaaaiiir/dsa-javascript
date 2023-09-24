/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            leftArr[i] = 1;
        } else {
            leftArr[i] = nums[i - 1] * leftArr[i - 1] ?? 1;
        }
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            rightArr[i] = 1;
        } else {
            rightArr[i] = nums[i + 1] * rightArr[i + 1] ?? 1;
        }
    }

    const result = [];
    for (let i = 0; i < nums.length; i++) {
        result.push(leftArr[i] * rightArr[i]);
    }

    return result;
};

console.log(productExceptSelf([1, -1, 0, 3, -3]));
console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([1, 0, 0, 12, 34]));

/**
 * BUBBLE SORT
 * - Loop
 *   - Compare first with second, if bigger switch them
 *   - Then compare second with third, if bigger switch
 *   - Continue till end
 * - This bubbles the largest item to the end
 * - Continue this but reducing the size of loop by 1 each time.
 */

function bubbleSort(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

/**
 * SELECTION SORT
 * - Find the minimum item, and bring it to the beginning of the sequence we are looking at
 * - Reduce the sequence by 1 each time
 */
function selectionSort(arr) {
    let min;
    for (let i = 0; i < arr.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j;
        }

        // swap
        if (min !== i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}

/**
 * INSERTION SORT
 * - If less than item before it, we switch them
 * - We continue comparing to the item before until we reach the beginning
 */
function insertionSort(arr) {
    let temp;
    for (let i = 1; i < arr.length; i++) {
        temp = arr[i];
        for (var j = i - 1; arr[j] > temp && j > -1; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}

/**
 * MERGE SORT
 * - Recursively splits the arr in half until you have single item arrays
 * - Then combines the single item arrays into an ordered array
 * - Continues to combine until we have a single sorted array
 *
 * Example:
 * [5, 4, 7, 1, 3, 2, 8, 6]
 * -> [5, 4, 7, 1][3, 2, 8, 6]
 * -> [5, 4][7, 1][3, 2][8, 6]
 * -> [5][4][7][1][3][2][8][6]
 * Now combine them
 * -> [4, 5][1, 7][2, 3][6, 8]
 * -> [1, 4, 5, 7][2, 3, 6, 8]
 * -> [1, 2, 3, 4, 5, 6, 7, 8]
 */
function mergeSort(arr) {
    // base case
    if (arr.length === 1) return arr;

    // breaks arrays in half
    const arr1 = mergeSort(arr.slice(0, arr.length / 2));
    const arr2 = mergeSort(arr.slice(arr.length / 2, arr.length));

    // merge the arrays
    return merge(arr1, arr2);
}

function merge(arr1, arr2) {
    const combined = [];

    let i = 0;
    let j = 0;

    // Iterate until we reach the end of either array
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            combined.push(arr1[i]);
            i++;
        } else {
            combined.push(arr2[j]);
            j++;
        }
    }

    // If arr1 hasn't reached the end, continue till end and add it to combined
    while (i < arr1.length) {
        combined.push(arr1[i]);
        i++;
    }

    // If arr2 hasn't reached the end, continue till end and add it to combined
    while (j < arr2.length) {
        combined.push(arr2[j]);
        j++;
    }

    return combined;
}

// TESTING
console.log(bubbleSort([5, 7, 1, 23, 14, 12, 12]));
console.log(selectionSort([5, 7, 1, 23, 14, 12, 12]));
console.log(insertionSort([5, 7, 1, 23, 14, 12, 12]));

// Test Merge
console.log(merge([1, 5, 7], [1, 3, 8]));
console.log(mergeSort([5, 7, 1, 23, 14, 12, 12]));
console.log(mergeSort([5, 7, 1, 23, 14, 12, 54, 12]));

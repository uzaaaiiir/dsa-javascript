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
 */
function insertionSort(arr) {}

/**
 * MERGE SORT
 */
function mergeSort(arr) {}

// TESTING
console.log(bubbleSort([5, 7, 1, 23, 14, 12, 12]));
console.log(selectionSort([5, 7, 1, 23, 14, 12, 12]));

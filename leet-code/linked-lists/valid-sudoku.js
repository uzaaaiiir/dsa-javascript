/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rowHashmap = {};
    let colHashmap = {};
    let arr3x3 = [
        [[], [], []],
        [[], [], []],
        [[], [], []],
    ];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] !== ".") {
                rowHashmap[board[i][j]] = rowHashmap[board[i][j]] + 1 || 1;
            }

            if (board[j][i] !== ".") {
                colHashmap[board[j][i]] = colHashmap[board[j][i]] + 1 || 1;
            }

            arr3x3[Math.floor(i / 3)][Math.floor(j / 3)].push(board[i][j]);
        }

        for (const item in rowHashmap) {
            if (rowHashmap[item] > 1) {
                return false;
            }
        }

        for (const item in colHashmap) {
            if (colHashmap[item] > 1) {
                return false;
            }
        }

        rowHashmap = {};
        colHashmap = {};
    }

    let arr3x3Hashmap = {};
    for (let i = 0; i < arr3x3.length; i++) {
        for (let j = 0; j < arr3x3[i].length; j++) {
            arr3x3[i][j].forEach((val) => {
                if (val !== ".") {
                    arr3x3Hashmap[val] = arr3x3Hashmap[val] + 1 || 1;
                }
            });

            for (const val in arr3x3Hashmap) {
                if (arr3x3Hashmap[val] > 1) {
                    return false;
                }
            }
            arr3x3Hashmap = {};
        }
    }

    return true;
};

const trueBoard = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const falseRowBoard = [
    ["5", "3", ".", "5", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const falseColBoard = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", "7", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const false3x3Board = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."],
];

// console.log(isValidSudoku(trueBoard));
// console.log(isValidSudoku(falseRowBoard));
// console.log(isValidSudoku(falseColBoard));
console.log(isValidSudoku(false3x3Board));

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     // Solution 1
//     return str.split("").reverse().join("");
// }

// function reverse(str) {
//     // Solution 2
//     let reverseStr = "";
//     for (let char of str) {
//         reverseStr = char + reverseStr;
//     }
//     return reverseStr;
// }

function reverse(str) {
    // Solution 3
    return str.split("").reduce((reversed, char) => {
        return char + reversed;
    }, "");
}

module.exports = reverse;

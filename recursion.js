/**
 * Recursion: A function that calls itself until a base case is satisfied
 * - Base case: A condition that causes the function to stop calling itself
 * - Recursive case: when we call the function again
 *
 * Call Stack
 * - Is the stack for calls to functions in a program.
 * - When a function is executed, it is added to the call stack
 */

function functThree() {
    console.log("Three");
}

function funcTwo() {
    functThree();
    console.log("Two");
}

function funcOne() {
    funcTwo();
    console.log("One");
}

/**
 * Call Stack:
 * functionThree()
 * functionTwo()
 * functionOne()
 *
 * Three executes and then returns to two.
 * Two executes and returns to one.
 * One executes and returns to global program.
 * - Prints Three, then Two, then One
 */
funcOne();

/**
 * @param {Number} val
 * @returns Number
 */
function factorial(val) {
    if (val === 1) return val;

    return val * factorial(val - 1); // returns n * (n-1)!
}

console.log(factorial(10));

// rest parameter is used to represent an indefinite number of arguments
// an array is created to hold the rest of
// the parameters passed to the function

const sumAll = (...numbers) => {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)); // Output: 45
console.log(sumAll(10, 20)); // Output: 30

// rest parameter must be the last parameter in the function definition
function multiply(factor, ...values) {
    return values.map(value => value * factor);
}
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]

// Example of using rest parameter with other parameters
function introduce(greeting, ...names) {
    names.forEach(name => {
        console.log(greeting + ", " + name + "!");
    });
}
introduce("Hello", "Alice", "Bob", "Charlie");
// Output:
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!

const winners = ["Alice", "Bob", "Charlie", "David"];
function announceWinners(...winners) {
    winners.forEach((winner, index) => {
        console.log(`Winner ${index + 1}: ${winner}`);
    });
}
announceWinners(...winners);
// Output:
// Winner 1: Alice
// Winner 2: Bob
// Winner 3: Charlie
// Winner 4: David

// Note: Only one rest parameter is allowed in a function 
// function invalidRestParam(...args1, ...args2) {
//     return args1.concat(args2);
// }
// console.log(invalidRestParam(1, 2, 3, 4)); // SyntaxError
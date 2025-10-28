// spread operator in function calls, spread represented with three dots (...)
function sum(a, b, c) {
    return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);
console.log(result); // Output: 6

const wrongResult = Math.max(numbers);
console.log(wrongResult); // Output: NaN, because Math.max not accept array, it needs separate values

const maxCorrect = Math.max(1, 2, 3); // Correct usage, output: 3

// spread operator with rest parameters
function findMax(...args) {
    return Math.max(...args);
}

const maxNumber = findMax(5, 10, 3, 8);
console.log(maxNumber); // Output: 10

// combining arrays using spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// combining objects using spread operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

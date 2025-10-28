// Mohamad Solkhan Nawawi - JavaScript Fundamental From Beginner to Advanced

// Array (object type)
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // object
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// Accessing array elements
console.log(numbers[0]); // 1
console.log(numbers.length); // 5

// Modifying array elements
numbers[0] = 10;
console.log(numbers); // [ 10, 2, 3, 4, 5 ]

// Array methods
// Adding elements to an array
numbers.push(6); // adds 6 to the end of the array
console.log(numbers); // [ 10, 2, 3, 4, 5, 6 ]
// Removing elements from an array
numbers.pop(); // removes the last element (6) from the array
console.log(numbers); // [ 10, 2, 3, 4, 5 ]
// Adding elements to the beginning of an array
numbers.unshift(0); // adds 0 to the beginning of the array
console.log(numbers); // [ 0, 10, 2, 3, 4, 5 ]
// Removing elements from the beginning of an array
numbers.shift(); // removes the first element (0) from the array
console.log(numbers); // [ 10, 2, 3, 4, 5 ]
// Finding the index of an element
console.log(numbers.indexOf(3)); // 2, returns the first index at which a given element can be found in the array, or -1 if it is not present
// Checking if an array includes a certain element
console.log(numbers.includes(4)); // true, determines whether an array includes a certain value among its entries

// Concatenating arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); // [ 1, 2, 3, 4, 5, 6 ]

// Prototype indexOf method
const fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits.indexOf("cherry")); // 2
console.log(fruits.indexOf("grape")); // -1

// Includes method
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape")); // false

// Sorting method
const unsortedNumbers = [5, 3, 8, 1, 2, 10];
unsortedNumbers.sort();
console.log(unsortedNumbers); // [ 1, 10, 2, 3, 5, 8 ] - Note: sorts as strings by default
// To sort numbers correctly, provide a compare function
unsortedNumbers.sort((a, b) => a - b);
console.log(unsortedNumbers); // [ 1, 2, 3, 5, 8, 10 ]

// Splice method
const spliceArray = [1, 2, 3, 4, 5];
spliceArray.splice(2, 1); // removes 1 element at index 2
console.log(spliceArray); // [ 1, 2, 4, 5 ]
spliceArray.splice(2, 0, 3); // adds 3 at index 2
console.log(spliceArray); // [ 1, 2, 3, 4, 5 ]
spliceArray.splice(1, 2, "a", "b"); // removes 2 elements at index 1 and adds 'a' and 'b'
console.log(spliceArray); // [ 1, 'a', 'b', 4, 5 ]

// Slice method
const sliceArray = [1, 2, 3, 4, 5];
const newArray = sliceArray.slice(1, 4); // extracts elements from index 1 to 4 (not including 4)
console.log(newArray); // [ 2, 3, 4 ]
console.log(sliceArray); // [ 1, 2, 3, 4, 5 ] - original array remains unchanged
const anotherArray = sliceArray.slice(-3); // extracts the last 3 elements
console.log(anotherArray); // [ 3, 4, 5 ]
const yetAnotherArray = sliceArray.slice(2); // extracts elements from index 2 to the end
console.log(yetAnotherArray); // [ 3, 4, 5 ]

// Reverse method
const reverseArray = [1, 2, 3, 4, 5];
reverseArray.reverse();
console.log(reverseArray); // [ 5, 4, 3, 2, 1 ]

// Join method
const joinArray = ["Hello", "World"];
const joinedString = joinArray.join(" ");
console.log(joinedString); // 'Hello World'

// Another methods can be found at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Modifying value conts in array
const constArray = [1, 2, 3];
constArray[0] = 10; // valid, modifying an element of the array
console.log(constArray); // [ 10, 2, 3 ]
// constArray = [4, 5, 6]; // invalid, will throw an error
// console.log(constArray); // Uncaught TypeError: Assignment to constant variable.
// Only value of the array elements can be changed, not the reference to the array itself

// Multi-dimensional array
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log(matrix[1][0]); // 4, accessing element at row 1, coloumn 0
console.log(matrix.length); // 3, number of rows

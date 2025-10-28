// Mohamad Solkhan Nawawi - JavaScript Fundamental From Beginner to Advanced

// How to run JavaScript code
// 1. Using Browser Console
// 2. Using Node.js
// 3. Using Online Editors (e.g., JSFiddle, CodePen, etc.)

// Variables and Data Types in JavaScript
// Variable declaration using var, let, and const
// 1. var, declared globally or function-scoped
var x = 10;
console.log(x); // 10

// 2. let, block-scoped
let y = 20;
console.log(y); // 20

// 3. const, block-scoped and cannot be reassigned
const z = 30;
console.log(z); // 30

// Reassigning variables
x = 15; // valid
console.log(x); // 15

y = 25; // valid
console.log(y); // 25

// z = 35; // invalid, will throw an error
// console.log(z); // Uncaught TypeError: Assignment to constant variable.

// Tips for using var, let, and const
// 1. Use const by default, unless you know the variable's value will change.
// 2. Use let if the variable's value will change.
// 3. Avoid using var to prevent scope-related issues.

// Tips for naming variables
// 1. Use meaningful names that describe the variable's purpose.
// 2. Use camelCase for multi-word variable names (e.g., firstName, totalAmount).
// 3. Avoid using reserved keywords (e.g., var, let, const, function, etc.).
// 4. Start variable names with a letter, underscore (_), or dollar sign ($). Avoid starting with numbers.
// 5. Be consistent with your naming conventions throughout your code.

// Data type on JavaScript
// 1. Primitive data type
// 2. Non-primitive data type

// Primitive data type
// 1. Number
let age = 20;
console.log(typeof age); // number

// 2. String
let name = "John Doe";
console.log(typeof name); // string

// 3. Boolean
let isStudent = true;
console.log(typeof isStudent); // boolean

// 4. Undefined
let address;
console.log(typeof address); // undefined, address is declared but not assigned a value

// 5. NaN (Not a Number)
let result = 10 / "Hello";
console.log(result); // NaN
console.log(typeof result); // number, NaN is considered a number type in JavaScript, though it represents an invalid number

// 6. Null
let city = null;
console.log(typeof city); // object (this is a known quirk in JavaScript)
console.log(city); // null

// Non-primitive data type
// 1. Object
let person = {
    name: "John Doe",
    age: 20,
    isStudent: true
};
console.log(typeof person); // object
console.log(person); // { name: 'John Doe', age: 20, isStudent: true }

// 2. Array (object type)
let numbers = [1, 2, 3, 4, 5];
console.log(typeof numbers); // object
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(Array.isArray(numbers)); // true, checks if numbers is an array

// 3. Function (object type)
function greet() {
    console.log("Hello, World!");
}
console.log(typeof greet); // function
greet(); // Hello, World!

// 4. Method (function type)
let person2 = {
    name: "Jane Doe",
    greet: function() {
        console.log("Hello, " + this.name + "!");
    }
};
console.log(typeof person2.greet); // function
person2.greet(); // Hello, Jane Doe!
// Note: In JavaScript, functions are first-class objects, so they can be treated like any other object type.





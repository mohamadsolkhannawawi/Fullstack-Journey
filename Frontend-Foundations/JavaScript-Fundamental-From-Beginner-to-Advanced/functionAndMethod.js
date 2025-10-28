// Function is spice of code reusability
// Syntax
// function functionName(parameters) {
//     // code to be executed
// }

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function sing() {
    console.log("Twinkle, twinkle, little star");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
}

// Arguments and Parameters
function greet(name) {
    console.log("Hello, " + name + "!");
} // 'name' is a parameter

greet("Alice"); // 'Alice' is an argument

// Multiple parameters
function add(a, b) {
    return a + b;
}

function multiplyTwo(a = 2, b = 2) {
    // default parameters
    return a * b;
}

const resultMultiply = multiplyTwo(5); // b will use the default value of 2
console.log(resultMultiply); // 10

function checkMultiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Both parameters must be numbers.";
    } else {
        return multiplyTwo(a, b);
    }
}

// Scope variables defined where they are accessible
let globalVar = "I am a global variable";

function localScope() {
    let localVar = "I am a local variable";
    console.log("This is a value of localVar: " + localVar); // Accessible
    console.log("This is a value of globalVar: " + globalVar); // Accessible
}

console.log(globalVar); // Accessible
localScope(); // Accessible
// console.log(localVar); // Unaccessible, will throw an error

// Blocked Scope Variables
function blockedScope() {
    if (true) {
        let blockedScopeVar = "I am a blocked scope variable";
        console.log("This is a value of blockedScopeVar: " + blockedScopeVar); // Accessible
    }
}

// var does not have blocked scope
function varFunction() {
    if (true) {
        var varVariable = "I am a var variable";
        console.log("This is a value of varVariable: " + varVariable); // Accessible
    }
}

function accessibleVarFunction() {
    var varVariable = "I am a var version 2 of varVariable";
    console.log("This is a value of varVariable now: ", varVariable);
}
varFunction(); // Accessible
accessibleVarFunction(); // Accessible
// console.log(varVariable); // Unaccessible, will throw an error

// Lexical Scope
function lexicalScope() {
    const outerVar = "I am from outer function";
    console.log(outerVar);
    function mediumInnerFunction() {
        const mediumVar = "I am from medium inner function";
        console.log(mediumVar);
        function innerFunction() {
            const innerVar = "I am from inner function";
            console.log(innerVar); // Accessible
        }
        innerFunction();
    }
    mediumInnerFunction();
}
lexicalScope(); // Accessible
innerFunction(); // Unaccessible, will throw an error
// console.log(outerVar); // Unaccessible, will throw an error
// console.log(innerVar); // Unaccessible, will throw an error

// Function Expression
const square = function (x) {
    return x * x;
};

// Function as argument
function argumentFunction(func, value) {
    return func(value);
}

const squaredValue = argumentFunction(square, 5);

function rollDiceTwoTimes(rollDiceFunc) {
    const firstRoll = rollDiceFunc();
    const secondRoll = rollDiceFunc();
    console.log("First Roll:", firstRoll);
    console.log("Second Roll:", secondRoll);
    return firstRoll + secondRoll;
}

const totalRoll = rollDiceTwoTimes(rollDice);

// Function as value a function
function makeCheckRandomNumber(factor) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("Random number is:", randomNumber);
    console.log("Factor is:", factor);
    if (randomNumber > factor) {
        return function () {
            console.log("Random number is greater than " + factor);
        };
    } else {
        return function () {
            console.log("Random number is less than or equal to " + factor);
        };  
    }
}

const checkRandomNumber = makeCheckRandomNumber(5);
checkRandomNumber();

// Methods is function inside an object
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    age: 30,
    twoYearsLater: function() {
        return this.age + 2;
    }
}
person.firstName; // John
person.lastName; // Doe
person.fullName(); // "John Doe"
person.age; // 30
person.twoYearsLater(); // 32

// This keyword
const car = {
    brand: "Toyota",
    model: "Corolla",
    getCarInfo: function() {
        return  `Name of the car is ${this.brand} ${this.model}`;
    }
}

car.getCarInfo(); // "Name of the car is Toyota Corolla"

// Try catch block
function divide(a,b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    const result = divide(10, 0);
    console.log(result);
} catch (error) {
    // The error object itself contains the message property
    console.error("Error occurred: " + error.message);
}
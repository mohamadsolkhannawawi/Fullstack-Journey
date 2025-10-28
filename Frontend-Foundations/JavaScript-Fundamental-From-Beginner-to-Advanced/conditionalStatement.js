// Mohamad Solkhan Nawawi - JavaScript Fundamental From Beginner to Advanced

//  Decision Making in JavaScript
// 1. if statement
let score = 85;
if (score >= 90) {
    console.log("A");
}

// 2. if...else statement
if (score >= 90) {
    console.log("A");
} else {
    console.log("B");
}

// 3. if...else if...else statement
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else {
    console.log("D");
}

// 4. switch statement
let grade = 'B';
switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Good");
        break;
    case 'C':
        console.log("Average");
        break;
    default:
        console.log("Poor");
}

// 5. Nested if statement
let marks = 75;
if (marks >= 50) {
    if (marks >= 75) {
        console.log("Distinction");
    } else {
        console.log("Pass");
    }
} else {
    console.log("Fail");
}

// Comparison Operators
// 1. Equal to (==)
console.log(5 == '5'); // true, compares value only
// 2. Not equal to (!=)
console.log(5 != '5'); // false, compares value only
// 3. Strict equal to (===)
console.log(5 === '5'); // false, compares value and type
// 4. Strict not equal to (!==)
console.log(5 !== '5'); // true, compares value and type
// 5. Greater than (>)
console.log(5 > 3); // true
// 6. Greater than or equal to (>=)
console.log(5 >= 5); // true
// 7. Less than (<)
console.log(3 < 5); // true
// 8. Less than or equal to (<=)
console.log(5 <= 5); // true
// 9. Ternary operator (condition ? expr1 : expr2)
let access = (age >= 18) ? "Allowed" : "Denied";
console.log(access); // Allowed

// Alert, Prompt, and Confirm
// 1. Alert
alert("This is an alert message!"); // Displays an alert dialog with the specified message and an OK button
// 2. Prompt
let userName = prompt("Please enter your name:"); // Displays a dialog with an optional message prompting the user to input some text
console.log("Hello, " + userName + "!"); // Greets the user with the entered name
// 3. Confirm
let isConfirmed = confirm("Are you sure you want to proceed?"); // Displays a dialog with an optional message and OK and Cancel buttons
if (isConfirmed) {
    console.log("User confirmed the action.");
} else {
    console.log("User canceled the action.");
}

// How to running JavaScript code in file
// 1. Create a JavaScript file with .js extension (e.g., script.js)
// 2. Write your JavaScript code in the file
// 3. Create an HTML file and link the JavaScript file using <script> tag
// 4. Open the HTML file in a web browser to run the JavaScript code


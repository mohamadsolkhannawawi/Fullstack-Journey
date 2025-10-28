// Syntax of for loop
// for (initialization; condition; increment/decrement) {
//     // code to be executed
// }

// Example of for loop
for (let i = 1; i <= 5; i++) {
    console.log("Aku Cinta Undip");
    console.log(i); // 1 2 3 4 5
}

for (let i = 0; i < 5; i += 2) {
    console.log(i); // 0 2 4
}

for (let i = 5; i > 0; i -= 2) {
    console.log(i); // 5 3 1
}

for (let i = 10; i <= 100000; i *= 10) {
    console.log(i); // 10 100 1000 10000 100000
}

// Infinite loop
// for (let i = 0; i >= 0; i += 20) {
//     console.log(i); // 0 20 40 60 80 ...
// }

// Array iteration with for loop

const names = ["John", "Alice", "Bob"];
for (let i = 0; i < names.length; i++) {
    console.log(i + 1, names[i]); // 1 John 2 Alice 3 Bob
}

// Nested for loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log("i:", i, "j:", j);
        // i: 1 j: 1
        // i: 1 j: 2
        // i: 1 j: 3
        // i: 2 j: 1
        // i: 2 j: 2
        // i: 2 j: 3
        // i: 3 j: 1
        // i: 3 j: 2
        // i: 3 j: 3
    }
}

const answers = ["a", "b", "c", "d"];
for (let i = 0; i < 4; i++) {
    console.log(`${i + 1}. Question number ${i + 1}`);
    for (let j = 0; j < 4; j++) {
        console.log(`   ${answers[j]}. Answer is ${answers[j]}`);
    }
}

// Nested loop for multidimensional array
const students = [
    ["John", "Doe", "Nanda"],
    ["Alice", "Smith", "Andi"],
    ["Bob", "Johnson", "Nina"],
];

for (let i = 0; i < students.length; i++) {
    const studentsData = students[i];
    console.log(`Seat row ${i + 1}`);
    for (let j = 0; j < studentsData.length; j++) {
        console.log(`   Student ${j + 1}: ${studentsData[j]}`);
    }
}

// While loop
// Syntax of while loop
// while (condition) {
//     // code to be executed
// }

// Example of while loop
let count = 1;
while (count <= 5) {
    console.log(`Like Undip ${count}`);
    console.log("Count is:", count);
    console.log("I love Undip");
    count++;
}

const pass = "12345678";
let input = prompt("Enter your password:");
while (input !== pass) {
    alert("Wrong password, try again!");
    input = prompt("Enter yout password again:");
}
console.log("Correct password, welcome!");

let nameUser = prompt("Dear user, please enter your name:");
// Break and continue in loop
while (true) {
    if (nameUser === "Solkhan") {
        console.log("Welcome back, Solkhan!");
        break;
    }
    nameUser = prompt(nameUser + ", not correct, please enter your name:");
}

for (let i = 1; i < 10000; i ++) {
    console.log(i);
    if (i === 10) {
        console.log("We reached 10, stop the loop!");
        break;
    }
}

// Elegant way to create loop with For Of
const fruits = ["Apple", "Banana", "Cherry"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }
for (let fruit of fruits) {
    console.log(fruit);
}

// // Nested loop for multidimensional array
// const students = [
//     ["John", "Doe", "Nanda"],
//     ["Alice", "Smith", "Andi"],
//     ["Bob", "Johnson", "Nina"],
// ];

// Syntax of for of loop
// for (variable of iterable) {
//     // code to be executed
// }
for (let student of students) {
    console.log("Seat row:", students.indexOf(student) + 1);
    for (let name of student) {
        console.log("   ", name);
    }
}

// For in loop for object iteration
// Syntax of for in loop
// for (key in object) {
//     // code to be executed
// }
const studentsScores = {
    John: 85,
    Alice: 90,
    Bob: 78
};

for (let student in studentsScores) {
    console.log(`${student} have score ${studentsScores[student]}`);
}

let totalScore = 0;
let numberOfStudents = 0;
for (let student in studentsScores) {
    totalScore += studentsScores[student];
    numberOfStudents++;
}

mean = totalScore / numberOfStudents;
console.log("Mean score is:", mean);
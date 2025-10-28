// Default parameter can be used, if user not pass any value to the function
function greet(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greet(); // Output: Hello, Guest!
greet("Alice"); // Output: Hello, Alice!

// Default parameter can also be an expression
function calculateArea(width, height = 10) {
    return width * height;
}

console.log(calculateArea(5)); // Output: 50
console.log(calculateArea(5, 20)); // Output: 100

// Default parameters can be functions as well
function getDefaultName() {
    return "John Doe";
}

function welcomeUser(name = getDefaultName()) {
    console.log("Welcome, " + name + "!");
}
welcomeUser(); // Output: Welcome, John Doe!
welcomeUser("Jane"); // Output: Welcome, Jane!

// Default parameters can depend on previous parameters
function createUser(username, role = "User", isActive = true) {
    return {
        username: username,
        role: role,
        isActive: isActive
    };
}
console.log(createUser("alice"));
console.log(createUser("bob", "Admin", false));
// Output: { username: 'alice', role: 'User', isActive: true }
// Output: { username: 'bob', role: 'Admin', isActive: false }

// Note: Default parameters are only used when the argument is `undefined`
function testDefault(value = 42) {
    console.log(value);
}
testDefault(); // Output: 42
testDefault(undefined); // Output: 42
testDefault(null); // Output: null
testDefault(0); // Output: 0

// Default is invalid if used before non-default parameter
// This will throw a SyntaxError
function invalidFunction(param1 = 10, param2) {
    return param1 + param2;
}

console.log(invalidFunction(15, 5)); // Output: 20
console.log(invalidFunction(undefined, 5)); // Output: 15
// console.log(invalidFunction( , 5)); // SyntaxError
// Correct way to define the function
console.log(invalidFunction(5)); // Output: NaN, because param2 is undefined
// Correct way to define the function is to place non-default parameters first
console.log(invalidFunction()); //Output: NaN

function happyBirthday(name = "Guest", age) {
    console.log("Happy birthday " + name + "!");
    console.log("You are " + age + " years old.");
}
console.log(happyBirthday("Alice", 30));
console.log(happyBirthday(undefined, 25));
// Output: Happy birthday Guest!
// Output: You are 25 years old.

function testPrint(name = "Guest", greeting) {
    console.log(greeting + ", " + name + "!");
}
testPrint("Alice", "Welcome");
testPrint(undefined, "Hello");
// Output: Welcome, Alice!
// Output: Hello, Guest!
testPrint();
// Output: undefined, Guest!
// Note: In the last call, greeting is undefined, so it prints "undefined, Guest!"
testPrint("Bob");
// Output: undefined, Bob!
// If yout want to use default for name, but provide greeting, you can do:
testPrint(undefined, "Hi");

// NOTE: Use default parameters in last to avoid confusion and unexpected results.
// JavaScript is single-threaded, meaning it has a single call stack and
// can execute one piece of code at a time. This characteristic is crucial
// to understanding how JavaScript handles function execution and asynchronous operations.

// Web Browser have ability to handle multiple tasks simultaneously using different threads,
// because there are built with language that support multi-threading like C++.

// However, JavaScript itself runs on a single thread. This means that while
// JavaScript can initiate multiple tasks (like making network request or setting timers),
// it can only execute one task at a time in its call stack.

// When a function is called, it is added to the call stack. The Javascript engine
// executes the function at the top of the stack. Once the function completes,
// it is removed from the stack, and control returns to the function below it in the stack.

// This single-threaded nature of JavaScript is why asynchronous programing is essential.
// Asynchronous programming allows JavaScript to initiate long-running tasks.
// without blocking the main thread, enabling it to remain responsive to user interactions.

// Example if user clicks a button that triggers a network request, the request is
// initiated, and while waiting for the response, JavaScript can continue to handle other tasks.

// Bellow is an example to demonstrate how the call stack works in JavaScript.
console.log(
    "See callstackFunction.js for example of call stack in JavaScript."
);

// Simple code:
console.log("Start");
setTimeout(() => {
    console.log("Inside setTimeout, executed after 2 seconds");
}, 2000);
console.log("End");
// Output:
// Start
// End
// Inside setTimeout, executed after 2 seconds

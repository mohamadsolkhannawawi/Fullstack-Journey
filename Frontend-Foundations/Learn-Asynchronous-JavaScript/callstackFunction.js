// Callstack function used to demonstrate how the call stack works in JavaScript

function firstFunction() {
    console.log("First function start");

    secondFunction();

    console.log("First function end");
}

function secondFunction() {
    console.log("Second function start");

    thirdFunction();

    console.log("Second function end");
}

function thirdFunction() {
    console.log("Third function executing");
}

firstFunction();
// Output:
// First function start
// Second function start
// Third function executing
// Second function end
// First function end

// Because JavaScript is single-threaded, it uses a call stack to manage
// function execution. When a function is called, it is added to the top
// of the call stack. When the function completes, it is removed from the
// stack, and control returns to the function below it in the stack.

// From code above we can see how the call stack works as each function is called and
// completed in a last-in-first-out (LIFO) manner.

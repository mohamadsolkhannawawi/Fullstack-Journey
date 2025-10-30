// Create Promise, understanding how to resolve and reject

// Study case to change background color after a delay
const changeBackgroundColor = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve("Background color changed to " + color);
        }, delay);
    });
};

// Using the Promise
changeBackgroundColor("lightblue", 1000)
    .then((color) => {
        console.log(color);
        return changeBackgroundColor("lightgreen", 1000);
    })
    .then((color) => {
        console.log(color);
        return changeBackgroundColor("pink", 1000);
    })
    .then((color) => {
        console.log(color);
        return changeBackgroundColor("lightcoral", 1000);
    });

// Without reject case, we can also create a simple Promise, code above can be run
// without any error handling for demonstration purposes.

// Example using reject case
const fetchDataWithPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1-3 seconds
        setTimeout(() => {
            if (delay < 2900) {
                resolve(`Data from ${url} fetched in ${delay} ms.`);
            } else {
                reject(`Error: Request to ${url} fetched in ${delay} ms.`);
            }
        }, delay);
    });
};

const url = "https://api.example.com/data";
fetchDataWithPromise(url)
    .then((response) => {
        console.log("Promise success:", response);
    })
    .catch((err) => {
        console.log("Promise error:", err);
    });

// In this example, if the delay is less than 2900 ms, the Promise resolves successfully.
// If the delay is 2900 ms or more, the Promise is rejected and an error message is logged.

// resolve is parameter to indicate successful completion of the Promise
// reject is parameter to indicate failure of the Promise
// We use .then() to handle resolved Promises and .catch() to handle rejected Promises

// Promise have 3 states:
// 1. Pending: Initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully.
// 3. Rejected: The operation failed.
// This is a basic example of creating and using Promises in JavaScript.

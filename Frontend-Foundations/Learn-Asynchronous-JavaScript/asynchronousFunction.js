// Async will be used to declare a function as asynchronous, it returns a Promise

// Example of async function
async function fetchDataAsync(url) {
    console.log("Fetching data from", url);
    const delay = Math.floor(Math.random() * 1000) + 1000; // Random delay between 1-5 seconds
    if (delay < 2900) {
        return `Data from ${url} fetched in ${delay} ms.`;
    } else {
        throw new Error(`Error: Request to ${url} fetched in ${delay} ms.`);
    }
}

const urlAsync = "https://api.example.com/dataAsync";
fetchDataAsync(urlAsync)
    .then((response) => {
        console.log("Async function success:", response);
    })
    .catch((err) => {
        console.log("Async function error:", err);
    });

// In this example, if the delay is less than 2900 ms, the async function resolves successfully.
// If the delay is 2900 ms or more, the async function throws an error and it is caught in the catch block.
// async function automatically returns a Promise
// We use .then() to handle resolved Promises and .catch() to handle errors thrown in async functions

// return to indicate successful completion of the async function
// throw new Error to indicate failure of the async function

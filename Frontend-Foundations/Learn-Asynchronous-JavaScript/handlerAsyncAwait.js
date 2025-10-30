// To handler async and await we can use try... catch for error handling

// Example of async function with await and error handling
const fetchDataAsyncAwait = async (url) => {
    console.log("Fetching data from", url);
    const delay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1-3 seconds
    if (delay < 2900) {
        return `Data from ${url} fetched in ${delay} ms.`;
    } else {
        throw new Error(`Request to ${url} fetched in ${delay} ms.`);
    }
};

const urlAsyncAwait = "https://api.example.com/dataAsyncAwait";
const handleFetchData = async (url) => {
    try {
        const response = await fetchDataAsyncAwait(url);
        console.log("Async function success:", response);
        try {
            const response2 = await fetchDataAsyncAwait(url); // chaining another await call
            console.log("Async function success:", response2);
        } catch (err) {
            console.log("Async function error:", err);
        }
    } catch (err) {
        console.log("Async function error:", err);
    }
};

// With .then() and .catch() we can also handle async/await function
const handleFetchDataWithPromise = (url) => {
    fetchDataAsyncAwait(url)
        .then((response) => {
            console.log("Async function success:", response);
            return fetchDataAsyncAwait(url);
        })
        .then((response2) => {
            console.log("Async function success:", response2);
        })
        .then((response3) => {
            console.log("Async function success:", response3);
        })
        .catch((err) => {
            console.log("Async function error:", err);
        });
};

// Please call one of the functions to see the result, comment the other one
handleFetchData(urlAsyncAwait);
// handleFetchDataWithPromise(urlAsyncAwait); // Call also with .then() and .catch()

// In this example, if the delay is less than 2900 ms, the async function resolves successfully.
// If the delay is 2900 ms or more, the async function throws an error and it is caught in the catch block.
// async function automatically returns a Promise
// We use try...catch to handle errors thrown in async functions
// This is way to handle async/await with proper error handling

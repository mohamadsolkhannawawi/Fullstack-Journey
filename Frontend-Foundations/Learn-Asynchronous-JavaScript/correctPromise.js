// To handle Promise Hell, we can chain Promises properly

// Example using Promises
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

const urlCorrect = "https://api.example.com/dataCorrect";
fetchDataWithPromise(urlCorrect)
    .then((response) => {
        console.log("Promise success:", response);
        return fetchDataWithPromise(urlCorrect);
    })
    .then((response) => {
        console.log("Promise success:", response);
        return fetchDataWithPromise(urlCorrect);
    })
    .then((response) => {
        console.log("Promise success:", response);
    })
    .catch((err) => {
        console.log("Promise error:", err);
    });

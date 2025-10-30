// Compare function with Callback Request and Promise

// Example using Callbacks
const fetchDataWithCallback = (url, succes, error) => {
    const delay = Math.floor(Math.random() * 3000) + 1000; // Random delay between 1-3 seconds
    setTimeout(() => {
        if (delay < 2900) {
            succes(`Data from ${url} fetched in ${delay} ms.`);
        } else {
            error(`Error: Request to ${url} timed out after ${delay} ms.`);
        }
    }, delay);
};

const url1 = "https://api.example.com/data1";
fetchDataWithCallback(
    url1,
    function (response) {
        console.log("Callback Success:", response);
        fetchDataWithCallback(
            url1,
            function (response) {
                console.log("Callback Success:", response);
                fetchDataWithCallback(
                    url1,
                    function (response) {
                        console.log("Callback Success:", response);
                    },
                    function (err) {
                        console.log("Callback Error:", err);
                    }
                );
            },
            function (err) {
                console.log("Callback Error:", err);
            }
        );
    },
    function (err) {
        console.log("Callback Error:", err);
    }
);

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

const url2 = "https://api.example.com/data2";
fetchDataWithPromise(url2)
    .then((response) => {
        console.log("Promise success:", response);
        fetchDataWithPromise(url2)
            .then((response) => {
                console.log("Promise success:", response);
                fetchDataWithPromise(url2)
                    .then((response) => {
                        console.log("Promise success:", response);
                    })
                    .catch((err) => {
                        console.log("Promise error:", err);
                    });
            })
            .catch((err) => {
                console.log("Promise error:", err);
            });
    })
    .catch((err) => {
        console.log("Promise error:", err);
    });

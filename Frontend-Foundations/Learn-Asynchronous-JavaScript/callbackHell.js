// In Javascript we can have multiple nested callbacks which can make the code
// hard to read and maintain. This situation is commonly referred to as "callback hell".

// Example of Callback Hell
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched");
    }, 1000);
}

function processData(data, callback) {
    setTimeout(() => {
        console.log(`${data} processed`);
        fetchData((newData) => {
            console.log(`${newData} processed further`);
            fetchData((finalData) => {
                console.log(`${finalData} fully processed`);
                fetchData((ultimateData) => {
                    console.log(`${ultimateData} completely done`);
                });
            }, 1000);
        }, 1000);
    }, 1000);
}

processData("Initial data", (result) => {
    console.log(result);
});

// The above code demonstrates callback hell with multiple nested callbacks.
// To avoid callback hell, we can use Promises or async/await syntax
// which provide a cleaner and more manageable way to handle asynchronous operations.

// Await is use to wait for a Promise to resolve or reject inside an async function

// Example of async function with await
// Study case to change background color after a delay
const delayedColorChange = async (color, delay) => {
    document.body.style.backgroundColor = color;
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (delay < 3000) {
        return `Background color changed to ${color} in ${delay} ms.`;
    } else {
        throw new Error(
            `Error: Failed to change color to ${color} in ${delay} ms.`
        );
    }
};

// Using the async function
const changeColors = async () => {
    try {
        const color1 = await delayedColorChange("lightblue", 1000);
        console.log(color1);
        const color2 = await delayedColorChange("lightgreen", 1000);
        console.log(color2);
        const color3 = await delayedColorChange("pink", 3000);
        console.log(color3);
        const color4 = await delayedColorChange("lightcoral", 1000);
        console.log(color4);
        console.log("All colors changed successfully.");
    } catch (error) {
        console.error(error);
    }
};
changeColors();

// In this example, the async function delayedColorChange changes the background color
// and waits for a specified delay using await before returning a message.
// The changeColors function calls delayedColorChange multiple times using await
// to ensure each color change completes before proceeding to the next.
// We use try...catch to handle any potential errors in the async function calls.
// async function automatically returns a Promise
// We use await to pause execution until the Promise is resolved
// return to indicate successful completion of the async function
// throw new Error to indicate failure of the async function

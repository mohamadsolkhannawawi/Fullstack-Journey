const maxNumber = parseInt(prompt("Enter the maximum number: "));

if (!maxNumber) {
    maxNumber = parseInt(prompt("Please enter a valid number: "));
}

const targetNumber = Math.floor(Math.random() * 10) + 1;

let guess = parseInt(prompt("Enter your first guess: "));
let attempts = 1;
while (parseInt(guess) !== targetNumber) {
    if (guess === "") {
        guess = parseInt(prompt("Please enter a valid number: "));
    } else if (guess > targetNumber) {
        guess = parseInt(prompt("Too high! Try again: "));
    } else {
        guess = parseInt(prompt("Too low! Try again: "));
    }
    attempts++;
    console.log("Attempt number:", attempts);
}
alert(
    `Congratulations! You've guessed the number ${targetNumber} in ${attempts} attempts!`
);

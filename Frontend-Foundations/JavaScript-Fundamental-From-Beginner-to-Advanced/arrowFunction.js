// Arrow functions provide a concise syntax for writing
// functions in JavaScript. They are often used for short

// const functionName = (parameters) => {
// function body

// }

const exp = (a, b) => {
    return a ** b;
};

console.log(exp(2, 3)); //8


// Implisit Arrow Function
const multiply = (x,y) => x * y;
console.log(multiply(4, 5)); //20

const random = () => (Math.random() * 1000);
console.log(random()); // Random number between 0 and 1000

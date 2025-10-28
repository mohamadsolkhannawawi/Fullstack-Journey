// Mohamad Solkhan Nawawi - JavaScript Fundamental From Beginner to Advanced

// Object Data Structure is a collection of key-value pairs

let person = { // Object named person
    name : "John Doe", // Key name with value "John Doe"
    age : 20,
    isStudent : true
    // Object property is a key-value pair
};
console.log(typeof person); // object
console.log(person); // { name: 'John Doe', age: 20, isStudent: true }

// Accessing object properties
console.log(person.name); // John Doe
console.log(person["age"]); // 20
// Adding new property
person.address = "123 Main St";
console.log(person.address); // 123 Main St
// Modifying existing property
person.age = 21;
console.log(person.age); // 21
// Deleting property
delete person.isStudent;
console.log(person.isStudent); // undefined
console.log(person); // { name: 'John Doe', age: 21, address: '123 Main St' }

// Object math and random methods
console.log(Object.keys(person)); // [ 'name', 'age', 'address' ], returns an array of a given object's own property names
console.log(Object.values(person)); // [ 'John Doe', 21, '123 Main St' ], returns an array of a given object's own property values
console.log(Object.entries(person)); // [ [ 'name', 'John Doe' ], [ 'age', 21 ], [ 'address', '123 Main St' ] ], returns an array of a given object's own enumerable string-keyed property [key, value] pairs
console.log(Object.assign({}, person)); // { name: 'John Doe', age: 21, address: '123 Main St' }, creates a shallow copy of an object
console.log(Object.freeze(person)); // { name: 'John Doe', age: 21, address: '123 Main St' }, freezes an object, preventing new properties from being added to it and marking all existing properties as read-only
console.log(Object.isFrozen(person)); // true, determines if an object is frozen

console.log(Math.PI); // 3.141592653589793, returns the value of PI
console.log(Math.round(4.7)); // 5, rounds a number to the nearest integer
console.log(Math.ceil(4.2)); // 5, rounds a number up to the next largest integer
console.log(Math.floor(4.7)); // 4, rounds a number down to the next smallest integer
console.log(Math.abs(-7.5)); // 7.5, returns the absolute value of a number
console.log(Math.sqrt(64)); // 8, returns the square root of a number
console.log(Math.pow(2, 3)); // 8, returns the value of a base expression taken to a specified power
console.log(Math.min(1, 2, 3, -4, 5)); // -4, returns the smallest of zero or more numbers
console.log(Math.max(1, 2, 3, -4, 5)); // 5, returns the largest of zero or more numbers
console.log(Math.random()); // returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 10); // returns a random number between 0 (inclusive) and 10 (exclusive)

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023,
    color: ["red", "white", "black"],
    productionStock: {
        Indonesia: 1000,
        Japan: 5000,
        USA: 2000
    },
    isProduction: true,
}


// Accessing nested object properties
car.brand // Toyota
car.color[0] //red
car.productionStock.Indonesia // 1000
car["productionStock"]["USA"] // 2000
car.year // 2023
car.isProduction // true

// Modifing nested object properties
car.color.push("blue") // add new color to the color array
car.color[1] = "silver" // modify color at index 1
car.productionStock.USA = 2500 // modify production stock in USA

// Adding new property to nested object
car.price = 21000000000
car.productionStock.Canada = 1500
console.log(car); // 





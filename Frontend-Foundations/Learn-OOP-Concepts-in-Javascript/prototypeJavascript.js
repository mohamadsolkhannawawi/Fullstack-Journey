// Prototype in JavaScript defines a mechanism by which objects can inherit
// properties and methods from other objects.
// Every JavaScript object has a prototype property that points
// to another object. When a property or method is accessed on an object,
// JavaScript first looks for that property or method on the object itself.
// If it doesn't find it there, it looks for it on the object's prototype,
// and so on, up the prototype chain until it reaches the end of the chain.

// Example of Prototype in JavaScript
// Creating a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
    console.log(
        `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
};

// Creating an instance of Person
const john = new Person("John", 30);

// Accessing the greet method from the prototype
john.greet(); // Output: Hello, my name is John and I am 30 years old.

// Checking the prototype chain
console.log(Object.getPrototypeOf(john) === Person.prototype); // Output: true
console.log(john instanceof Person); // Output: true
console.log(john.hasOwnProperty("name")); // Output: true
console.log(john.hasOwnProperty("greet")); // Output: false
console.log("greet" in john); // Output: true
// The 'greet' method is not an own property of 'john', but it is accessible
// through the prototype chain.

console.log(Person.prototype); // Output: Person { greet: [Function (anonymous)] }
console.log(john); // Output: Person { name: 'John', age: 30 }

// Additional overlap prototype
Array.prototype.pop = () => "This is a custom pop method";
const arr = [1, 2, 3];
console.log(arr.pop()); // Output: This is a custom pop method
// The above code overrides the default pop method of arrays.
// It's generally not recommended to override built-in methods
// as it can lead to unexpected behavior in your code.
console.log(Array.prototype); // Output: Array { pop: [Function (anonymous)], ... }
console.log(arr); // Output: [ 1, 2, 3 ]

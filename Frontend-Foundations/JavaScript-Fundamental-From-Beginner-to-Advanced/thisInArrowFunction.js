// this is an arrow function inside an object method
// and it does not have its own 'this' context.
// 'this' refers to global object (window in browsers, global in Node.js)

// to generate a 'this' correctly, we can use a regular function instead of an arrow function.

// Example 1: Using arrow function (incorrect 'this' context)
const obj1 = {
    name: "Object 1",
    arrowFunction: () => {
        console.log(this.name); // undefined, because 'this' refers to global object
    },
};

obj1.arrowFunction(); // undefined

// Example 2: Using regular function (correct 'this' context)
const obj2 = {
    name: "Object 2",
    regularFunction: function () {
        console.log(this.name); // "Object 2", because 'this' refers to obj2
    },
};

obj2.regularFunction(); // "Object 2"

// Example 3: Using arrow function inside a method to access outer 'this'
const obj3 = {
    name: "Object 3",
    method: function () {
        const arrowFunc = () => {
            console.log(this.name); // "Object 3", because 'this' refers to obj3
        };
        arrowFunc();
    },
};

obj3.method(); // "Object 3"

// Example 4: Using arrow function in setTimeout (incorrect 'this' context)
const obj4 = {
    name: "Object 4",
    callObjWithSetTimeout: function () {
        setTimeout(function () {
            console.log(this.name); // undefined, because 'this' refers to global object
        }, 1000);
    },
};

obj4.callObjWithSetTimeout(); // undefined

// Example 5: Using arrow function in setTimeout (correct 'this' context)
const obj5 = {
    name: "Object 5",
    callObjWithSetTimeout: function () {
        setTimeout(() => {
            console.log(this.name); // "Object 5", because 'this' refers to obj5
        }, 1000);
    },
};

obj5.callObjWithSetTimeout(); // "Object 5"

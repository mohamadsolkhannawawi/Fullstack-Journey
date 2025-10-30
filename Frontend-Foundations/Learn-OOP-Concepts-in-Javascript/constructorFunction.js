// Constructor function used to create multiple objects with similar
// properties and methods. It is a special type of function that is
// used to create and initialize objects in JavaScript.
// Constructor functions are defined using the function keyword
// and are typically named with a capital letter to distinguish
// them from regular functions. When a constructor function is called
// with the new keyword, a new object is created, and the this keyword
// inside the constructor function refres to the newly created object.

// Example of Constructor Function in Javascript
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

Color.prototype.rgb = function () {
    const { r, g, b } = this;

    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
    const { r, g, b } = this;

    return (
        "#" +
        ((1 << 24) + (r << 16) + (g << 8) + b)
            .toString(16)
            .slice(1)
            .toUpperCase()
    );
};

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this;

    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

const red = new Color(255, 0, 0);
console.log(red.rgb()); // Output: rgb(255, 0, 0)
console.log(red.hex()); // Output: #FF0000
console.log(red.rgba(0.5)); // Output: rgba(255, 0, 0, 0.5)

const green = new Color(0, 255, 0);
console.log(green.rgb()); // Output: rgb(0, 255, 0)
console.log(green.hex()); // Output: #00FF00
console.log(green.rgba(0.75)); // Output: rgba(0, 255, 0, 0.75)

function isSameObject(obj1, obj2) {
    return obj1.r === obj2.r && obj1.g === obj2.g && obj1.b === obj2.b;
}
console.log(isSameObject(red, green)); // Output: false
const anotherRed = new Color(255, 0, 0);
console.log(isSameObject(red, anotherRed)); // Output: true

console.log(Color.prototype); // Output: Color { rgb: [Function (anonymous)], hex: [Function (anonymous)], rgba: [Function (anonymous)] }
console.log(red); // Output: Color { r: 255, g: 0, b: 0 }
console.log(green); // Output: Color { r: 0, g: 255, b: 0 }
console.log(anotherRed); // Output: Color { r: 255, g: 0, b: 0 }

console.log(red.rgb === anotherRed.rgb); // Output: true
// The above line shows that both 'red' and 'anotherRed' instances
// share the same 'rgb' method from the Color prototype.
console.log(red.hex === green.hex); // Output: true
// The above line shows that both 'red' and 'green' instances
// share the same 'hex' method from the Color prototype.

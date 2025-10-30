// Create Object with Object Factory Function is another way to create
// objects in JavaScript. It involves defining a function that returns
// a new object with specified properties and methods.

// Example of Object Factory Function in JavaScript
function convertColorTohex(r, g, b) {
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        const { r, g, b } = this;

        return `rgb(${r}, ${g}, ${b})`;
    };

    color.hex = function () {
        const { r, g, b } = this;

        return (
            "#" +
            ((1 << 24) + (r << 16) + (g << 8) + b)
                .toString(16)
                .slice(1)
                .toUpperCase()
        );
    };

    return color;
}

console.log(convertColorTohex(255, 0, 0).rgb()); // Output: rgb(255, 0, 0)
console.log(convertColorTohex(255, 0, 0).hex()); // Output: #FF0000
console.log(convertColorTohex(0, 255, 0).rgb()); // Output: rgb(0, 255, 0)
console.log(convertColorTohex(0, 255, 0).hex()); // Output: #00FF00

const red = new convertColorTohex(255, 0, 0);
console.log(red.rgb()); // Output: rgb(255, 0, 0);
console.log(red.hex()); // Output: #FF0000
console.log(red.rgba(0.5)); // Output: rgba(255, 0, 0, 0.5)

const green = new convertColorTohex(0, 255, 0);
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

console.log(red.rgb === anotherRed.rgb); // Output: false
// The above line shows that 'red' and 'anotherRed' instances
// have different 'rgb' methods.
console.log(red.hex === green.hex); // Output: false
// The above line shows that 'red' and 'green' instances
// have different 'hex' methods.

// Define Object with Class in Javascript is a syntactical sugar over
// the existing prototype-based inheritance and constructor functions.
// It provides a cleaner and more intuitive way to create objects
// and manage inheritance in Javascript. Classes were introduced in ECMAScript 2015 (ES6)
// and have since become a popular way to work with objects in Javascript.

// Example of Class in Javascript
class Color {
    constructor(r, g, b, name) {
        // Syntactic sugar for constructor function, this.r is representing
        // the property of the object being created.
        // and r is the parameter passed to the constructor.
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name; // Added name property
        this.calHSL(); // Pre-calculate HSL values
    }

    innerRGB() {
        const { r, g, b } = this;
        return `${r}, ${g}, ${b}`;
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`;
    }

    hex() {
        const { r, g, b } = this;

        return (
            "#" +
            ((1 << 24) + (r << 16) + (g << 8) + b)
                .toString(16)
                .slice(1)
                .toUpperCase()
        );
    }

    calHSL() {
        let { r, g, b } = this;
        r /= 255;
        g /= 255;
        b /= 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l;
        l = (max + min) / 2;
        if (max === min) {
            h = s = 0; // achromatic
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0);
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b:
                    h = (r - g) / d + 4;
                    break;
            }
            h /= 6;
        }
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);
        h = Math.round(360 * h);
        this.h = h;
        this.s = s;
        this.l = l;
    }

    hsl() {
        const { h, s, l } = this;
        return `hsl(${h}, ${s}%, ${l}%)`;
    }

    fullySaturated() {
        const { h, l } = this;
        return `hsl(${h}, 100%, ${l}%)`;
    }

    opposite() {
        const { h, s, l } = this;
        const newHue = (h + 180) % 360;
        return `hsl(${newHue}, ${s}%, ${l}%)`;
    }
}

const red = new Color(255, 0, 0, "Red");
console.log(red.rgb()); // Output: rgb(255, 0, 0)
console.log(red.hex()); // Output: #FF0000
console.log(red.rgba(0.5)); // Output: rgba(255, 0, 0, 0.5)

const green = new Color(0, 255, 0, "Green");
console.log(green.rgb()); // Output: rgb(0, 255, 0)
console.log(green.hex()); // Output: #00FF00
console.log(green.rgba(0.75)); // Output: rgba(0, 255, 0, 0.75)
console.log(green.hsl()); // Output: hsl(120, 100%, 50%)
console.log(green.fullySaturated()); // Output: hsl(120, 100%, 50%)
console.log(green.opposite()); // Output: hsl(300, 100%, 50%)

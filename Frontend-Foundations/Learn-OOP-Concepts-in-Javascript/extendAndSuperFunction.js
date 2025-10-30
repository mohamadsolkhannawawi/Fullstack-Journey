// In OOP there is a concept of inheritance, where one class can inherit properties
// and methods from another class. In Javascript, this is achieved using the extends
// keyword along with the super() function to call the parent class constructor.

// Example of extend and super function in Javascript

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating.`);
    }

    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}

class Cat extends Animal {
    constructor(name, age, lives) {
        super(name, age);
        this.lives = lives;
    }

    meow() {
        console.log(`${this.name} says Meow!`);
    }

    showLives() {
        console.log(`${this.name} has ${this.lives} lives left.`);
    }
}

const myCat = new Cat("Whiskers", 3, 9);
myCat.eat(); // Output: Whiskers is eating.
myCat.sleep(); // Output: Whiskers is sleeping.
myCat.meow(); // Output: Whiskers says Meow!
myCat.showLives(); // Output: Whiskers has 9 lives left.

// In this example, we have a parent class Animal with properties name and age,
// and methods eat() and sleep(). The Cat class extends the Animal class and adds
// a new property lives and methods meow() and showLives().
// The super() function is used in the Cat constructor to call the parent class
// constructor and initialize the inherited properties.
console.log(Cat.prototype); // Output: Cat { meow: [Function (anonymous)], showLives: [Function (anonymous)] }
console.log(myCat); // Output: Cat { name: 'Whiskers', age: 3, lives: 9 }
console.log(myCat.eat === Animal.prototype.eat); // Output: true
// The above line shows that 'myCat' instance
// inherits the 'eat' method from the Animal prototype.
console.log(myCat.meow === Cat.prototype.meow); // Output: true
// The above line shows that 'myCat' instance
// has its own 'meow' method from the Cat prototype.
console.log(myCat instanceof Cat); // Output: true
console.log(myCat instanceof Animal); // Output: true
console.log(Animal.prototype); // Output: Animal { eat: [Function (anonymous)], sleep: [Function (anonymous)] }
console.log(myCat.hasOwnProperty("name")); // Output: true
console.log(myCat.hasOwnProperty("eat")); // Output: false
console.log("eat" in myCat); // Output: true
// The 'eat' method is not an own property of 'myCat', but it is accessible
// through the prototype chain.
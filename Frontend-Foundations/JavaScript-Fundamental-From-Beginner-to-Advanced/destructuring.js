// Destructuring is a feature in Javascript that allows
// you to extract values from arrays or properties
//from objects and assign them to variables

// Array Destructuring
const rgb = [255, 200, 100];
const [red, green, blue] = rgb;
console.log(red);   // Output: 255
console.log(green); // Output: 200
console.log(blue);  // Output: 100

// We can also skip values while Destructuring
const [r, , b] = rgb;
console.log(r); // Output: 255
console.log(b); // Output: 100

// Default values can be assigned during Destructuring
const [x = 0, y = 0, z = 0, alpha = 1] = [10, 20];
console.log(x);     // Output: 10
console.log(y);     // Output: 20
console.log(z);     // Output: 0 (default value)
console.log(alpha); // Output: 1 (default value)

const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

const [first, second, ...restNames] = names;
console.log(first);      // Output: Alice
console.log(second);     // Output: Bob
console.log(restNames);  // Output: [ 'Charlie', 'David', 'Eve', 'Frank' ]


// Object Destructuring
const person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

const { name, age } = person;
console.log(name); // Output: John Doe
console.log(age);  // Output: 30
const { address: { city, country } } = person;
console.log(city);    // Output: Anytown
console.log(country); // Output: USA
// Default values in object Destructuring

const { name: fullName = "Unknown", age: userAge = 0 } = person;
// fullName and userAge are new variable names
// fullName gets value "Unknown" if person.name is undefined its maybe used when person object is missing name property
console.log(fullName); // Output: John Doe
console.log(userAge);  // Output: 30
console.log(name);

person.name = "Jane Smith";
console.log(fullName); // Output: John Doe, because fullName is a separate variable, meaning it does not reference person.name
console.log(person.name); // Output: Jane Smith, because fullName is a separate variable

const user = {
    name: "John Doe",
    age: 30, 
    role: "Admin",
    hobbies: ["reading", "traveling", "swimming"]
}

const userAndRole = ({name, role}) => {
    console.log("Name: " + name + ", Role: " + role);
}
userAndRole(user); // Output: Name: John Doe, Role: Admin

// Destructuring with function parameters, with this we can directly extract values from an object passed to a function
// without needing to access each property individually inside the function, like user.name, user.age, etc.
function displayUserInfo({ name, age, role, hobbies }) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Role: " + role);
    console.log("Hobbies: " + hobbies.join(", "));
}
displayUserInfo(user);
// Output:
// Name: John Doe
// Age: 30
// Role: Admin
// Hobbies: reading, traveling, swimming


// Checking in JSON Objects
const movies = [
    {
        title: "The Shawshank Redemption",
        rating: 9.3,
    },
    {
        title: "The Godfather",
        rating: 9.2,
    },
    {
        title: "The Dark Knight",
        rating: 9.0,
    },
    {
        title: "Pulp Fiction",
        rating: 8.9,
    },
    {
        title: "Forrest Gump",
        rating: 8.8,
    },
    {
        title: "Inception",
        rating: 8.8,
    },
    {
        title: "Fight Club",
        rating: 8.8,
    },
    {
        title: "The Matrix",
        rating: 8.7,
    },
    {
        title: "Interstellar",
        rating: 8.6,
    },
    {
        title: "The Lord of the Rings: The Return of the King",
        rating: 9.0,
    },
];

const movieDetails = movies.map(({ title, rating}) => {
    return `Title: ${title}, Rating: ${rating}`;
})

console.log(movieDetails); // Output: Array of movie details
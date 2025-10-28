// Mohamad Solkhan Nawawi - JavaScript Fundamental From Beginner to Advanced

// 2. String
let name = "John Doe";
console.log(typeof name); // string
// You can use single quotes, double quotes, or backticks for strings
let singleQuoteString = 'Hello';
let doubleQuoteString = "World";
let backtickString = `Hello, ${name}!`;
console.log(singleQuoteString); // Hello
console.log(doubleQuoteString); // World
console.log(backtickString); // Hello, John Doe!
// Accessing characters in a string
console.log(name[0]); // J
console.log(name.charAt(1)); // o
console.log(name.length); // 8
// Concatenating strings
let fullName = name + " Smith";
console.log(fullName); // John Doe Smith
// Template literals
let templateString = `Hello, ${name}!`;
console.log(templateString); // Hello, John Doe!


// String methods
console.log(name.toUpperCase()); // JOHN DOE
console.log(name.toLowerCase()); // john doe
console.log(name.indexOf("Doe")); // 5, index of substring, -1 if not found
console.log(name.slice(0, 4)); // John, extracts a section of the string
console.log(name.replace("John", "Jane")); // Jane Doe, replaces a substring with another substring
console.log(name.split(" ")); // [ 'John', 'Doe' ], splits the string into an array of substrings
console.log(name.trim()); // John Doe, removes whitespace from both ends of the string
console.log(name.startsWith("John")); // true, checks if the string starts with a specified substring
console.log(name.endsWith("Doe")); // true, checks if the string ends with a specified substring
console.log(name.includes("ohn")); // true, checks if the string contains a specified substring
console.log(name.repeat(2)); // John DoeJohn Doe, repeats the string a specified number of times
console.log(name.charCodeAt(0)); // 74, returns the Unicode of the character at a specified index
console.log(String.fromCharCode(74)); // J, converts Unicode values to characters
console.log(name.localeCompare("Jane Doe")); // 1, compares two strings in the current locale
console.log(name.concat(" Smith")); // John Doe Smith, concatenates two or more strings
console.log(name.padStart(15, "*")); // *******John Doe, pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
console.log(name.padEnd(15, "*")); // John Doe*******, pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length
console.log(name.match(/o/g)); // [ 'o', 'o' ], retrieves the matches when matching a string against a regular expression
console.log(name.search("Doe")); // 5, searches a string for a specified value and returns the position of the match
console.log(name.slice(-3)); // Doe, extracts a section of the string from the end
console.log(name.substring(0, 4)); // John, extracts characters from index 0 to 4
console.log(name.valueOf()); // John Doe, returns the primitive value of a String object
console.log(name.normalize()); // John Doe, returns the Unicode Normalization Form of a given string
console.log(name.toString()); // John Doe, returns a string representing the specified object
console.log(name.split("")); // [ 'J', 'o', 'h', 'n', ' ', 'D', 'o', 'e' ], splits the string into an array of characters
console.log(name.slice(0, -4)); // John, extracts a section of the string from the start to the specified negative index
console.log(name.replace(/o/g, "0")); // J0hn D0e, replaces all occurrences of 'o' with '0'
console.log(name.charAt(name.length - 1)); // e, returns the last character of the string
console.log(name.indexOf("o", 5)); // 6, starts searching for 'o' from index 5
console.log(name.lastIndexOf("o")); // 6, returns the last occurrence of 'o'
let turkish_i = "istanbul";
console.log(turkish_i.toUpperCase()); // ISTANBUL, converts the string to uppercase considering Turkish locale
console.log(turkish_i.toLowerCase()); // istanbul, converts the string to lowercase considering Turkish locale
console.log(turkish_i.toLocaleUpperCase("tr-TR")); // İSTANBUL, converts the string to uppercase according to Turkish locale
console.log(turkish_i.toLocaleLowerCase("tr-TR")); // istanbul, converts the string to lowercase according to Turkish locale
console.log(name.toLocaleUpperCase()); // JOHN DOE, converts the string to uppercase according to any locale-specific case mappings
console.log(name.toLocaleLowerCase()); // john doe, converts the string to lowercase according to any locale-specific case mappings
console.log(name.split(" ", 1)); // [ 'John' ], splits the string into an array of substrings, limiting the number of splits
console.log(name.trimStart()); // John Doe, removes whitespace from the start of the string
console.log(name.trimEnd()); // John Doe, removes whitespace from the end of the string
console.log(name.endsWith("e", 8)); // true, checks if the string ends with 'e' considering only the first 8 characters
console.log(name.startsWith("J", 0)); // true, checks if the string starts with 'J' considering only the first
console.log(name.includes("D", 5)); // true, checks if the string contains 'D' starting from index 5

// About null and undefined
let undefinedVariable;
console.log(typeof undefinedVariable); // undefined
let nullVariable = null;
console.log(typeof nullVariable); // object
// Note: typeof null returns 'object' due to a historical bug in JavaScript
console.log(nullVariable === null); // true
console.log(undefinedVariable === undefined); // true
console.log(nullVariable == undefinedVariable); // true, because both represent absence of value
console.log(nullVariable === undefinedVariable); // false, because they are of different types

// Introduction to Objects Math and Random Number
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};

console.log(person.name); // Alice
console.log(person["age"]); // 30
person.age = 31; // Update age
console.log(person.age); // 31
person.city = "New York"; // Add new property
console.log(person.city); // New York
delete person.isStudent; // Remove property
console.log(person.isStudent); // undefined
console.log(typeof person); // object
console.log(person); // { name: 'Alice', age: 31, city: 'New York' }

// Math Object
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.abs(-10));
randomNum = Math.random() * 10; // Random number between 0 and 10
console.log(randomNum);

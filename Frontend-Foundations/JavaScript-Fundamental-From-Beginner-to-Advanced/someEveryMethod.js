// every is method can be used to check if all elements
// in an array pass a test

const numbers = [2, 4, 6, 8, 10];

const isAllEven = numbers.every((number) => number % 2 === 0);
console.log(isAllEven); // true, because all numbers are even

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

// Check if all movies have rating greater than 8.5
const isAllMoviesHighlyRated = movies.every((movie) => movie.rating > 8.5 );
console.log(isAllMoviesHighlyRated); // true

// some is method to check if at least one element passes a test
const mixedNumbers = [1, 3, 5, 6, 7, 9];

const hasEvenNumber = mixedNumbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber); // true, because 6 is even

// Checking in JSON Objects
const hasTopRatedMovie = movies.some((movie) => movie.rating > 9.0);
console.log(hasTopRatedMovie); // true, because there are movies with rating greater than 9.0

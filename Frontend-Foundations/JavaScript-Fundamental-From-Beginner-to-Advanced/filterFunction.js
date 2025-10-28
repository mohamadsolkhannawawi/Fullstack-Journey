// filter is function to filter out elements from an array
// based on a spesific condition.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filtering even numbers from the array
const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]

// Filtering in JSON Objects
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

// Filtering movies with rating greater than 9.0
const topRatedMovies = movies
    .filter((movieTitle) => movieTitle.rating > 9.0)
    .map((movieTitle) => movieTitle.title.toUpperCase());

console.log(topRatedMovies); // [ 'THE SHAWSHANK REDEMPTION', 'THE GODFATHER' ]
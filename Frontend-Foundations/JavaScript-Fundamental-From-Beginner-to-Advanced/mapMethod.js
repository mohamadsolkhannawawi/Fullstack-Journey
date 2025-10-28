// MapMethod is used to create a new array 
// by applying a function to each element of an existing array.

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map(function (num) {
    return num * num;
});

console.log(squaredNumbers); // [1, 4, 9, 16, 25]


const squaredNumbersEven = numbers.map(function (num) {
    if (num % 2 === 0) { 
        return num * num;
    } else {
        return num;
    }
});

console.log(squaredNumbersEven); //[ 1, 4, 3, 16, 5 ]


// Mapping JSON Objects
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

const movieTitles = movies.map(function (movie) {
    return movie.title.toLocaleUpperCase();
});

console.log(movieTitles); // Will print an array of movie titles in uppercase letters
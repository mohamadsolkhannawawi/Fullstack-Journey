// reduce is method of array prototype 
// that executes a reducer function on each element of the array,
// resulting in a single output value.

const numbers = [1, 2, 3, 4, 5];

// Sum of all numbers in the array
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initial value of accumulator

console.log(sum); // 15

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

// Calculate the average rating of all movies
const averageRating = movies.reduce((accumulator, movie, index, array) => {
    accumulator += movie.rating;
    if (index === array.length - 1) {
        return accumulator / array.length;
    } else {
        return accumulator;
    }
}, 0);
console.log(averageRating); // 8.93

// Compares movies  wth rating is best movie
const bestMovie = movies.reduce((bestMovie, currentMovie) => {
    console.log(bestMovie, currentMovie);
    if (currentMovie.rating > bestMovie.rating) {
        return currentMovie;
    } else {
        return bestMovie;
    }
});
console.log(`Best Movie: ${bestMovie.title}, with rating: ${bestMovie.rating}`); // { title: 'The Shawshank Redemption', rating: 9.3 }

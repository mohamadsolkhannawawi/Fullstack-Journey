// The forEach method in JS is used to execute a provided function once for each array element.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach(function (num) {
    console.log(num * num);
});

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

movies.forEach(function (movie) {
    console.log(`Movie: ${movie.title}, Rating: ${movie.rating}`);
});


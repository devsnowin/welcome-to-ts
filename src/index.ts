let Movie: {
    name: string,
    rating: number,
    year: Date,
};

const movies = [];

function addMovie(movie: {
    name: string,
    rating: number,
    year: Date,
}) {
    movies.push(movie);

    // movie.cast   // ❌ this throws an error, cast does not in the type movie.

    console.log(`${movie.name} added successfully`);
};

/** Optional type */

function getRating(movie: {
    name: string,
    rating?: number
}) {

    // Here, we are checking if the value not equal to undefined or the type of rating is number.
    if (typeof movie.rating === "number") {
        return `${movie.name} got ${movie.rating} ratings!!!`;
    };
};
var movies = require('./movies');
var buckysMovies = movies.factory();

buckysMovies.favMovie = "";
console.log("Bucky's favorite movie is: " + buckysMovies.favMovie);
console.log("Bucky's favorite movie is: " + movies.likedMovie);
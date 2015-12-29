var movies = require('./movies');

var emilysMovies = movies.factory(); // use the callback by calling its name which in this case is 'factory'

emilysMovies.favMovie = "The Notebook";
console.log("Emily's favorite movie is: " + emilysMovies.favMovie); // dynamic, factored module data
console.log("Emily's voted movie is: " + movies.likedMovie);
movies.printAvatar(); // don't wrap this around the console.
console.log("Emily's voted movie is: " + movies.printChappie());
console.log("Dianna's voted movie is: " + movies.printTitanic().DiannaMovie); // same behavior with favMovie
movies.printFandago;
// console.log("Emily's voted movie is: " + movies.printFandago);
var fs = require("fs"); // core module

fs.writeFileSync("corn.txt", "\"Corn is GMO, corn is hazard\"");
console.log(fs.readFileSync("corn.txt").toString());

var path = require("path");
var websiteHome = "client/js//angular.min.js";
var websiteAbout = "client/js/jquery.min.js";

console.log(path.normalize(websiteHome));
console.log(path.normalize(websiteAbout));

console.log(path.dirname(websiteHome));   // client/js/
console.log(path.basename(websiteHome));  // angular.min.js
console.log(path.extname(websiteHome));   // .js

console.log(__dirname); // full path
console.log(__filename); // full path + current file.js

require("./emily");
require("./bucky");

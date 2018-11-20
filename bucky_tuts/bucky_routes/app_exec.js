var express = require("express");
var path = require("path");
// var logger = require("morgan");
// var cookieParser = require("cookie-parser");
// var bodyParser = require("body-parser");

var app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

var routes = require("./idx.js");
// view engine setup
var port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
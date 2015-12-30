var http = require('http');
var connect = require('connect');
var app = connect();

function doFirst(request, response, next){
  console.log("Bacon");
  next(); // without next the second object in the stack will never get called
}

function doSecond(request, response, next){
  console.log("Tuna");
  next();
}

app.use(doFirst);
app.use(doSecond);

http.createServer(app).listen(process.env.PORT, process.env.IP);
console.log("Server is running..");
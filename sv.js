var http = require('http');

function onRequest(request, response){
    console.log("A user made a request "+ request.url);
    response.writeHead(200, {"Context-Type": "text/plain"}); // setting up the response
    response.write("Here is some data");
    response.end();
}

http.createServer(onRequest).listen(8888);
console.log("server is now running ... ");

/*// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});

var n=3333;
// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(n);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:"+ n +"/");*/
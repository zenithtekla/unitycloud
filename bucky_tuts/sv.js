var http = require('http');
var connect = require('connect');
var fs = require("fs"); // file handler lib

var app = connect();

// @app /profile
function profile(req, res){
  res.writeHead(200, { "Content-Type": "text/plain"});
  fs.createReadStream("./profile.html").pipe(res);
  console.log('User requested profile');
}

// @app /forum
function forum(req, res){
  res.writeHead(200, { "Content-Type": "text/html"});
  fs.createReadStream("./forum.html").pipe(res);
  console.log('User requested forum');
}

/*function onRequest(req, res){
  console.log('User requested ' + req.url);
  if (req.method == "GET" && (req.url == "/" || req.url == "/faq")){
    res.writeHead(200, { "Content-Type": "text/plain"});
    fs.createReadStream("./forum.html").pipe(res);
  } else {
    send404Response(res);
  }
}*/

app.use('/profile', profile);
app.use('/forum', forum);

var port = process.env.PORT || 3000;
http.createServer(app).listen(port, process.env.IP);
console.log("Server is running..", port);
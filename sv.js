var http = require('http');
var connect = require('connect');
var fs = require("fs"); // file handler lib
var app = connect();

function send404Response(res){
  res.writeHead(404, {"Content-Type": "text/plain"});
  res.write("Error 404: Page not found!");
  res.end();
}

// @app /profile
function profile(req, res){
  res.writeHead(200, { "Content-Type": "text/plain"});
  fs.createReadStream("./profile.html").pipe(res);
  console.log('User requested profile');
}

// @app /forum
function forum(req, res){
  res.writeHead(200, { "Content-Type": "text/plain"});
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

http.createServer(app).listen(process.env.PORT, process.env.IP);
console.log("Server is running..");
var http = require('http');
var connect = require('connect');
var app = connect();

function profile(req, res){
  console.log('User requested profile');
}

function forum(req, res){
  console.log('User requested forum');
}

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(process.env.PORT, process.env.IP);
console.log("Server is running..");
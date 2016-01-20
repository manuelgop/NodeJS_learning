var http = require('http');
var fs = require('fs');
var connect = require('connect');

var app = connect();

function profile(request, response){
    console.log("User request profile");

};

function forum(){
  console.log('User request FORUM');
};

app.use('/profile', profile);
app.use('/forum', forum);

http.createServer(app).listen(8888);
console.log("Server is running...");
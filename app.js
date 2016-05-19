var express = require("express");
var app = express();

var http = require("http").Server(app);
var io = require("socket.io")(http);
io.on("connection", function(socket) {
    console.log("Connection hello");
});

//app.use(express.static("public"));

app.get("/", function(request, response) {
   response.sendFile(__dirname+"/public/index.html");
});

app.get("/client.js", function(request, response) {
    response.sendFile(__dirname+"/public/client.js");
});

http.listen(3000, function() {
    console.log("Running!");
});

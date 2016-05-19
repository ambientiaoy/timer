var express = require("express");
var app = express();

var http = require("http").Server(app);
var io = require("socket.io")(http);

var aika = 60;
var ongoingCountdown;

var extracted = function (socket) {
    ongoingCountdown = setInterval(function () {
        aika = aika - 1;
        socket.emit("time", aika);
    }, 1000);
}

io.on("connection", function(socket) {
    console.log("Connection hello");
    socket.on("reset", function(){
        console.log("reset");
        aika = 60;
        extracted(socket);
    });
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

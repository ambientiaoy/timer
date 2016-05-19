$(document).ready( function(){
    console.log("client.js toimii");

    var socket = io();

    $("#nappi").on("click", function(){
        socket.emit("reset");
    });

    socket.on("time", function(time){
        $("#aika").html(time);
    });
});

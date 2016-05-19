$(document).ready( function(){
    console.log("client.js toimii");

    var socket = io();

    $("#nappi").on("click", function(){
        socket.emit("reset");
    });

    socket.on("time", function(time){
        $("#aika").html(time);
        if (time < 0) {
            $("body").css("background-color", "red");
        }   else{
            $("body").css("background-color", "#1e90ff");

        }
    });
});

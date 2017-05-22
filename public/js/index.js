var socket = io();

socket.on('connect', function() {
    console.log('connected to server');
});

socket.on('recieveData', function(data) {
    console.log(data.text);
});

socket.on('disconnect', function() {
    console.log('disconnected from the server');
});
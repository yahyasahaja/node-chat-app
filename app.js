const path = require('path');
const publicPath = path.join(__dirname + './public');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);
const socketIOClient = require('socket.io-client');
socketIOClient('http://localhost:3000');

io.on('connection', socket => {
    console.log('new user connected');
    socket.broadcast.emit('recieveData', {text: 'Pesan dari gua nih'});
    
    socket.on('sendData', data => {
        console.log('data: ', data.text);
    });

    socket.on('disconnect', () => {
        console.log('disconnected');
    });
});

app.use(express.static('./public'));

app.get('/woi', (req, res) => {
    res.send('woi');
})

server.listen(port, () => console.log(`server running at port ${port}`));
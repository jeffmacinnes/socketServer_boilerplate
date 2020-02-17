const express = require("express");
const socket = require("socket.io");

const port = 8888;
const hostedDir = 'public';

// Express server for hosting on specified port
let app = express();
const webServer = require('http').Server(app);
webServer.listen(port);
app.use(express.static(hostedDir));

// SOCKET.IO for streaming messages to clients
const testData = {
    1: 123,
    2: 456
};

const io = socket(webServer);
io.on('connection', (socket) => {
    // handle incoming connections
    let id = socket.id;
    socket.clientIP = socket.handshake.address.split(':').slice(-1)[0];
    console.log(`Received connection from client : ${id} ${socket.clientIP}`);

    // --- INCOMING MESSAGES FROM THIS CONNECTION -------
    socket.on('requestData', () => {
        socket.emit('newData', testData)
    })
})
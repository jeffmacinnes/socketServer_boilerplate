import io from 'socket.io-client';


const WEBSERVER = "127.0.0.1";
const PORT = 8888;

// --- SOCKET IO COMMUNICATION WITH SERVER ---------------
// Establish socket, connect to appropriate room
const socket = io.connect(`${WEBSERVER}:${PORT}`);
//const socket = io.connect();

socket.on('connect', () => {
    // connect to the appropriate room
    console.log(`client is connecting to server socket`)

    // request a dataset
    requestNewData();
});

socket.on('newData', (data) => {
    console.log('GOT NEW DATA');
    console.log(data);
})


const requestNewData = () => {
    socket.emit('requestData');
}
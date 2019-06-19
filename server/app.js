const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');


app.use(express.static(path.resolve('../client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
});

io.on('connection', (socket) => {
    console.log(socket);
});

http.listen(process.env.PORT);
const fs = require('fs');
const express = require('express');
const app = express();
const http = require('http').createServer( app);
const io = require('socket.io')(http);
const path = require('path');
const Player = require('./modules/Player');

const players = [];

app.use(express.static(path.resolve('../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
});

io.on('connection', (socket) => {
    console.log('Connected');

    socket.on('client:join', data => {
        const player = new Player(data.name, socket);
        players.push(player);
    });

    socket.on('client:data:player-info', (data) => {
        let counter = 0;
        while(counter < players.length && players[counter].socket !== socket) {
            counter++;
        }
        if(players[counter] != null) {
            let player = {
                name: players[counter].name,
                score: players[counter].score
            };
            console.log(player);
            socket.emit('server:data:player-info', {msg: player});
        } else {
            socket.emit('server:data:player-info', {msg: null});

        }
    });

    socket.on('disconnect', () => {
        let counter = 0;
        while(counter < players.length && players[counter].socket !== socket) {
            counter++;
        }
        players.splice(counter, 1);
    })
});

http.listen(process.env.PORT);
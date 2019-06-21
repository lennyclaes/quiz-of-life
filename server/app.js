const fs = require('fs');
const express = require('express');
const app = express();
const http = require('http').createServer( app);
const io = require('socket.io')(http);
const path = require('path');
const Player = require('./modules/Player');

const players = [];
let controller;

app.use(express.static(path.resolve('../client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
});

io.on('connection', (socket) => {
    socket.removeAllListeners();
    console.log('Connected');

    socket.on('client:join', data => {
        const player = new Player(data.name, socket);
        players.push(player);
        io.to(controller).emit('server:data:control-players', {msg: getPlayersToController()});
    });

    socket.on('client:controller', () => {
        controller = socket;
        console.log(socket);
        console.log(controller);
        socket.emit('server:data:control-players', {msg: getPlayersToController()});
    })

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
    });

    socket.on('client:data:control-players', () => {
        io.to(controller).emit('server:data:control-players', {msg: getPlayersToController()});
    });
});

function getPlayersToController() {
    if(controller != null) {
        let obj = [];
        players.forEach(player => {
            obj.push({
                name: player.name,
                score: player.score
            });
        });
        console.log(obj);
        return obj;
    }
}

http.listen(process.env.PORT);
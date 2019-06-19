const express = require('express');
const socket = require('socket.io');
const path = require('path');

const app = express();

app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
});

app.listen(80);
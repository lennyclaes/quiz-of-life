const express = require('express');
const socket = require('socket.io');
const path = require('path');

const app = express();

app.use(express.static(path.resolve('../client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve('../client/dist/index.html'));
});

app.listen(process.env.PORT);
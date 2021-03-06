const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
})
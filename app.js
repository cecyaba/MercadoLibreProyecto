const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, './public');

app.listen(3000, () => {
    console.log('Server up: http://localhost:3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'));
});

app.use(express.static('public'));
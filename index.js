const express = require('express');
//const client = require('./db.js');

const app = express();

//adding view engine
app.set('view engine', 'ejs');

//requests
app.get('/', (req, res) => {
    res.send('test');
});










//listen port 3000
app.listen(3000, () => {
    console.log('Server is running.');
});
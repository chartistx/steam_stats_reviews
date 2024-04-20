const express = require('express');
const salesController = require('./controllers/salesController');

const app = express();

//adding view engine
app.set('view engine', 'ejs');

//requests
app.get('/', (req, res) => {
    res.send('test');
});

//call steamController
salesController(app);

app.listen(3000);








//listen port 3000
app.listen(3000, () => {
    console.log('Server is running.');
});
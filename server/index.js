const express = require('express');
const salesController = require('./controllers/salesController');
const steamController = require('./controllers/steamController');
const cors = require('cors');

const app = express();
app.use(cors());
const bodyParser = require('body-parser');
app.use( bodyParser.json() ); 
app.use(express.json()); 
//adding view engine
//app.set('view engine', 'ejs');

const { Pool } = require('pg');
const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'steam',
    password: 'root',
    port: 5432
    
    });

//routes for vgsales data api
salesController(app,pool);
//routes form specific game description and reviews
steamController(app,pool);

//requests
app.get('/', (req, res) => {
    
    res.send('111111111');
});

// app.get('/apx', (req, res) => {
//     //const {rows} = salesController(app,pool);
//     //console.log(rows);
//     //res.send('222222222');
// });


app.listen(5000);









//listen port 3000
app.listen(3000, () => {
    console.log('Server is running.');
});
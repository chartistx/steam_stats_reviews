const express = require('express');
const salesController = require('./controllers/salesController');
const steamController = require('./controllers/steamController');
const cors = require('cors');

const app = express();
app.use(cors());
const bodyParser = require('body-parser');
app.use( bodyParser.json() ); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

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

app.listen(5000, () => {
    console.log('Server is running.');
});
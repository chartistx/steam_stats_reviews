// connect to database

module.exports = () => {
    const { Pool } = require('pg');
    const pool = new Pool({
        user: 'root',
        host: 'localhost',
        database: 'steam',
        password: 'root',
        port: 5432
        
        });
}
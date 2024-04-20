const fs = require("fs");
const { parse } = require("csv-parse");

const { Pool } = require('pg');

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'steam',
    password: 'root',
    port: 5432
    
  });


function checkInputVgsales(row){ //cleaning input for vgsales row
    //check if values are not empty
    if(row[0] == "" || row[1] == "" || row[2] == "" || row[3] == "" || row[4] == "" || row[5] == "" || row[6] == "" || row[7] == "" || row[8] == "" || row[9] == "" || row[10] == ""){
        return false;
    }
    //check if number values are numbers
    if(isNaN(row[0]) || isNaN(row[3]) || isNaN(row[6]) || isNaN(row[7]) || isNaN(row[8]) || isNaN(row[9]) || isNaN(row[10])){
        return false;
    }
    // check if numbers are positive
    if(row[0] < 0 || row[3] < 0 || row[6] < 0 || row[7] < 0 || row[8] < 0 || row[9] < 0 || row[10] < 0){
        return false;
    
    }
    //check if string values contain ', replace with '' so sql query works
    let str_index = [1,2,4,5];
    for(let i = 0; i < str_index.length; i++){
        if(row[str_index[i]].includes("'")){
            row[str_index[i]]= row[str_index[i]].replaceAll("'","''");
        }
    }
    return true;
}

function checkInputSteamReviews(row){ //cleaning input for vgsales row
    //check if values are not empty
    if(row[0] == "" || row[1] == "" || row[2] == "" || row[3] == "" || row[4] == ""){
        return false;
    }
    //check if number values are numbers
    if(isNaN(row[0]) || isNaN(row[3]) || isNaN(row[4])){
        return false;
    }
    // check if app_id is positive
    if(row[0] < 0){
        return false;
    }
    //check if review_score is between -1 and 1
    if(row[3] < -1 || row[3] > 1){
        return false;
    }
    //check if review_votes is 0 or 1
    if(row[4] !=0 && row[4] != 1){
        return false;
    }

    //check if string values contain ', replace with '' so sql query works
    let str_index = [1,2];
    for(let i = 0; i < str_index.length; i++){
        if(row[str_index[i]].includes("'")){
            row[str_index[i]]= row[str_index[i]].replaceAll("'","''");
        }
    }
    return true;
}

function migrateVgsales(){

    //parse csv file, clean data and insert into  database

    fs.createReadStream("./migrate/vgsales.csv")
    .pipe(parse({ delimiter: ",", from_line: 2}))
    .on("data", (async (row) => {
        //check if input is correct
        if(checkInputVgsales(row)){//if input row is usable
            await pool.query(`INSERT INTO vgsales VALUES (DEFAULT,${row[0]},'${row[1]}','${row[2]}',${row[3]},'${row[4]}','${row[5]}',${row[6]},${row[7]},${row[8]},${row[9]},${row[10]});`);
        }
        }));
}

function migrateReviews(){

    //parse csv file, clean data and insert into  database

    fs.createReadStream("./migrate/steam_data.csv")
    .pipe(parse({ delimiter: ",", from_line: 2, to_line:10000 }))
    .on("data", (async (row) => {
    
        if(checkInputSteamReviews(row)){//if input row is usable
            //add row to database
            await pool.query(`INSERT INTO steam_reviews VALUES (DEFAULT,${row[0]},'${row[1]}','${row[2]}',${row[3]},${row[4]});`);
        }
        }));

}

(async () => {
    try{
        // migrate vgsales first because game names are unique
        // add columns
        await pool.query(`CREATE TABLE IF NOT EXISTS vgsales (
            id SERIAL PRIMARY KEY,
            rank INT,
            name VARCHAR(255) ,
            platform VARCHAR(255),
            year INT,
            genre VARCHAR(255),
            publisher VARCHAR(255),
            na_sales DECIMAL,
            eu_sales DECIMAL,
            jp_sales DECIMAL,
            other_sales DECIMAL,
            global_sales DECIMAL
        );`);
        migrateVgsales();

        // migrate reviews

        // add columns
        await pool.query(`CREATE TABLE IF NOT EXISTS steam_reviews (
            id SERIAL PRIMARY KEY,
            app_id INT,
            app_name VARCHAR(255),
            review_text TEXT,
            review_score INT,
            review_votes INT
        );`);

        migrateReviews();
    }
    catch (err) {
        console.error( err);
    }
    finally{
        console.log("migration done");// not accurate , async still working
    }
})();



module.exports = (app,pool)=>{

    //update game info
    app.put('/api/game/:id',(req, res) => {
        //replace ' with '' to avoid sql errors
        req.body.name = req.body.name.replace(/'/g, "''");
        req.body.platform = req.body.platform.replace(/'/g, "''");
        req.body.genre = req.body.genre.replace(/'/g, "''");
        req.body.publisher = req.body.publisher.replace(/'/g, "''");

        //update record
        pool.query(`   UPDATE vgsales 
                        SET rank=${req.body.rank},
                            name='${req.body.name}',
                            platform = '${req.body.platform}',
                            year = ${req.body.year},
                            genre = '${req.body.genre}',
                            publisher = '${req.body.publisher}',
                            na_sales = ${req.body.na_sales},
                            eu_sales = ${req.body.eu_sales},
                            jp_sales = ${req.body.jp_sales},
                            other_sales = ${req.body.other_sales},
                            global_sales = ${req.body.global_sales}
                        WHERE id=${req.params.id};`);
        
    });

    //add new game
    app.post('/api/new_game',(req, res) => {
        //replace all ' with '' to avoid sql errors
        req.body.game_name = req.body.game_name.replace(/'/g, "''");
        req.body.platform = req.body.platform.replace(/'/g, "''");
        req.body.genre = req.body.genre.replace(/'/g, "''");
        req.body.publisher = req.body.publisher.replace(/'/g, "''");

        //insert new game data into database
        pool.query(`INSERT INTO vgsales VALUES (DEFAULT,${req.body.rank},'${req.body.game_name}','${req.body.platform}',${req.body.year},'${req.body.genre}','${req.body.publisher}',${req.body.na_sales},${req.body.eu_sales},${req.body.jp_sales},${req.body.other_sales},${req.body.global_sales});`);
               
    });
    
    //get all games
    app.get('/api/:page', (req, res) => {
        //get from database vgsales data + review count
        (async () => {
            try{
                const {rows} = await pool.query(`SELECT vgsales.id,vgsales.rank,vgsales.name,
                                                        vgsales.platform,vgsales.year,
                                                        vgsales.genre,vgsales.publisher,
                                                        vgsales.na_sales,vgsales.eu_sales,vgsales.jp_sales,
                                                        vgsales.other_sales,vgsales. global_sales,
                                                        SUM(CASE WHEN steam_reviews.app_name IS NULL THEN 0 ELSE 1 END) AS review_count
                                                FROM vgsales
                                                LEFT JOIN steam_reviews ON vgsales.name = steam_reviews.app_name
                                                GROUP BY vgsales.id,vgsales.rank,vgsales.name,
                                                        vgsales.platform,vgsales.year,
                                                        vgsales.genre,vgsales.publisher,
                                                        vgsales.na_sales,vgsales.eu_sales,vgsales.jp_sales,
                                                        vgsales.other_sales,vgsales. global_sales
                                                `);
                res.send(JSON.stringify(rows));
            }
            catch(err){
                console.error(err);
            }
        })();
        
    });

    //delete game
    app.delete('/games/:id', (req, res) => {
        //delete game data record from database
        pool.query(`DELETE FROM vgsales WHERE vgsales.id = ${req.params.id};`);
    });

};



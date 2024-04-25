module.exports = (app,pool)=>{

    //get game description
    app.get('/api/game/:id', (req, res) => {
        //get game description from database and send it to frontend
        
        (async () => {
            try{
                const {rows} = await pool.query(`SELECT * FROM vgsales
                                                WHERE id = ${req.params.id}
                                                ;`);
                res.send(JSON.stringify(rows));
            }
            catch(err){
                console.error(err);
            }
        })();
        
    });
    
    //get game reviews
    app.get('/api/game/reviews/:id', (req, res) => {
        //get game reviews from database and send it to frontend

        (async () => {
            let gameName = "";

            //get game name from database then get reviews using name
            //not the best way to do this
            try{
                const {rows} = await pool.query(`SELECT * FROM vgsales
                                                WHERE id = ${req.params.id}
                                                ;`);
                //console.log(rows);
                gameName = rows[0].name;
                
                
            }
            catch(err){
                console.error(err);
            }
            // fetch and send reviews to front
            try{
                
                gameName = gameName.replace(/'/g, "''");
                let {rows} = await pool.query(`SELECT * FROM steam_reviews
                                                WHERE app_name = '${gameName}'
                                                ;`);
                res.send(JSON.stringify(rows));
            }
            catch(err){
                console.error(err);
            }
        })();
        
    });
        


    app.get('/api/game/reviews/description/:id', (req, res) => {
        //fetch and send game description
        (async () => {
            try{
                const {rows} = await pool.query(`SELECT * FROM steam_reviews
                                                WHERE id = ${req.params.id}
                                                ;`);
                res.send(JSON.stringify(rows));
            }
            catch(err){
                console.error(err);
            }
        })();
    });

    //update review data
    app.put('/api/game/reviews/description/:id', (req, res) => {
        //replace all ' wtih '' to avoid sql errors
        req.body.review_text = req.body.review_text.replace(/'/g, "''");
        req.body.app_name = req.body.app_name.replace(/'/g, "''");
        //update review data in database
        pool.query(`   UPDATE steam_reviews
                        SET 
                            app_name='${req.body.app_name}',
                            review_text = '${req.body.review_text}',
                            review_score=${req.body.review_score},
                            review_votes=${req.body.review_votes}
                        WHERE id=${req.params.id} ;`);
        
    });

    //insert new review 
    app.post('/api/game/reviews/new', (req, res) => {
        //insert new review data into database
        //replace all ' with '' to avoid sql errors
        req.body.review_text = req.body.review_text.replace(/'/g, "''");
        req.body.app_name = req.body.app_name.replace(/'/g, "''");
        //insert new review into database
        pool.query(`INSERT INTO steam_reviews 
        VALUES (DEFAULT,${req.body.app_id},'${req.body.app_name}','${req.body.review_text}',${req.body.review_score},${req.body.review_votes});`)
    });
    
    //delete review
    app.delete('/api/game/reviews/description/:id', (req, res) => {
        //delete review data from database
        pool.query(`DELETE FROM steam_reviews WHERE id = ${req.params.id};`);
    });

};



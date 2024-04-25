module.exports = (app,pool)=>{

    app.get('/api/game/:id', (req, res) => {
        //console.log(`test ${req.params.id}`);
        
        (async () => {
            try{
                //fetch and send game description
                const {rows} = await pool.query(`SELECT * FROM vgsales
                                                WHERE id = ${req.params.id}
                                                ;`);
                res.send(JSON.stringify(rows));

                //console.log(rows);
            }
            catch(err){
                console.error(err);
            }
        })();
        
    });
    

    app.get('/api/game/reviews/:id', (req, res) => {
        //console.log(`test ${req.params.id}`);
        
        (async () => {
            let gameName = "";

            try{
                //get game name
                //not the best method, better should have passed the value to the function
                const {rows} = await pool.query(`SELECT * FROM vgsales
                                                WHERE id = ${req.params.id}
                                                ;`);
                //console.log(rows);
                gameName = rows[0].name;
                
                
            }
            catch(err){
                console.error(err);
            }

            try{
                // fetch and send reviews
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
        (async () => {
            try{
                //fetch and send game description
                const {rows} = await pool.query(`SELECT * FROM steam_reviews
                                                WHERE id = ${req.params.id}
                                                ;`);
                res.send(JSON.stringify(rows));

                //console.log(rows);
            }
            catch(err){
                console.error(err);
            }
        })();
    });
    app.put('/api/game/reviews/description/:id', (req, res) => {

        //console.log(`test ${req.params.id}`);
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

    app.post('/api/game/reviews/new', (req, res) => {
        //insert new review data into database
        req.body.review_text = req.body.review_text.replace(/'/g, "''");
        req.body.app_name = req.body.app_name.replace(/'/g, "''");

        //console.log(req.body);
        pool.query(`INSERT INTO steam_reviews 
        VALUES (DEFAULT,${req.body.app_id},'${req.body.app_name}','${req.body.review_text}',${req.body.review_score},${req.body.review_votes});`)
    });
    
    app.delete('/api/game/reviews/description/:id', (req, res) => {
        //delete review data from database
        pool.query(`DELETE FROM steam_reviews WHERE id = ${req.params.id};`);
    });

};



module.exports = (app,pool)=>{

    app.get('/api/game/:id', (req, res) => {
        console.log(`test ${req.params.id}`);
        
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

    });
    // });
    
    // app.post('/{$game}/reviews/{$review}', (req, res) => {
        
    // });
    
    // app.delete('/{$game}/reviews/{$review}', (req, res) => {
        
    // });

};



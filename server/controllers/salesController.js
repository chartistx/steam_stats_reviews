const { Typography } = require("antd");

module.exports = (app,pool)=>{
    //const connectDatabase = require('../components/connect_db');
    //connect to database
    //connectDatabase();
    app.post('/api/new_game',(req, res) => {

        //read data from put request
        
        
        pool.query(`INSERT INTO vgsales VALUES (DEFAULT,${req.body.rank},'${req.body.game_name}','${req.body.platform}',${req.body.year},'${req.body.genre}','${req.body.publisher}',${req.body.na_sales},${req.body.eu_sales},${req.body.jp_sales},${req.body.other_sales},${req.body.global_sales});`);
        
            // if(req.body!=null){//if body is not empty
                
            //     // console.log(`INSERT INTO vgsales VALUES (DEFAULT,${req.body.rank},'${req.body.game_name}',
            //     // '${req.body.platform}',${req.body.year},'${req.body.genre}','${req.body.publisher}',${req.body.na_sales},
            //     // ${req.body.eu_sales},${req.body.jp_sales},${req.body.other_sales},${req.body.global_sales});`);
            // }
        
        
        
});
    

    app.get('/api/:page', (req, res) => {
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
                                                //ORDER BY vgsales.name ASC
                                                // OFFSET ${req.params.page * 30} ROWS
                                                // FETCH FIRST 30 ROWS ONLY;
                res.send(JSON.stringify(rows));
            }
            catch(err){
                console.error(err);
            }
        })();
        
    });

    
   
    //console.log('test');

    // app.get('/sales', (req, res) => {

    // });

};



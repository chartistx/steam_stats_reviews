import { useParams } from "react-router-dom";
import React, {useEffect, useState } from 'react';


export default function ReviewCard (){
    const {id} = useParams();

    const [gameReviews, setGameReviews] = useState(null); //sets and holds review details
    useEffect(() => {
        //fetch specific review
        fetch(`http://localhost:5000/api/game/reviews/description/${id}`)
        .then(res=>{
            //console.log(res);
            return res.json();
        })
        .then(data=>{
            //console.log(data);
            setGameReviews(data);
        });

        
      }, []);

      function ReviewDescription () { //return game description
        if(gameReviews != null){
            return(
                <div>
                    <p>App name: {gameReviews[0].app_name}</p>
                    <p>score: {gameReviews[0].review_score}</p>
                    <p>votes: {gameReviews[0].review_votes}</p>
                    <p>Review: {gameReviews[0].review_text}</p>
                </div>
            );
        }
        else return null;
    }


    return(
        <div>
            <h1></h1>
            <ReviewDescription/>
        </div>
    );
}
import { useParams } from "react-router-dom";
import React, {useEffect, useState } from 'react';
import {Button } from 'antd';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export default function ReviewCard (){
    const {id} = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();

    //check if user was directed from a game card or used only link
    if(state==null){
        //go home if link was used
        navigate(`/`);
    }

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
    
    const clickDeleteGameReview=()=>{

        //console.log(state.record.id);
        //send delete request to server

        fetch(`http://localhost:5000/api/game/reviews/description/${id}`, { method: 'DELETE' })
            .then(() => console.log("Delete successful"));

        //after delete navigate to home
        
        navigate(`/`);
        window.location.reload();
        console.log(`clicked on delete`);
    }
    const clickEditGameReview=()=>{
        //navigate to EditGameReview.jsx
        navigate(`/games/review/edit/${id}`, { state: { record: state.record } });
        //console.log(state.record);
    }

    return(
        <div>
            <h1 >Review</h1>
                <Button
                    onClick={clickEditGameReview}>
                <EditOutlined 
                    style={{color:'blue'}}
                    />
                </Button>
                <Button
                    onClick={clickDeleteGameReview}>
                    <DeleteOutlined 
                    style={{color:'red'}}
                    />
                </Button>
            <ReviewDescription/>
        </div>
    );
}
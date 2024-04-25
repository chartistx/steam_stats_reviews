import { useParams } from "react-router-dom";
import React, {useEffect, useState } from 'react';
import {Button, Row, Col } from 'antd';
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

    //const [gameReviews, setGameReviews] = useState(null); //sets and holds review details
    // useEffect(() => {
    //     //fetch specific review
    //     fetch(`http://localhost:5000/api/game/reviews/description/${id}`)
    //     .then(res=>{
    //         //console.log(res);
    //         return res.json();
    //     })
    //     .then(data=>{
    //         //console.log(data);
    //         setGameReviews(data);
    //     });

        
    //   }, []);

      function ReviewDescription () { //return game description
        if(state.record != null){
            return(
                <div style={{textAlign:'center', backgroundColor:'white', padding:'10px', marginTop:'10px',borderRadius:'10px'}}>
                    <p><b>App name</b></p><p>{state.record.app_name}</p>
                    <p><b>Would recommend to others?</b></p><p>{state.record.review_score==1?'Yes':'No'}</p>
                    <p><b>Game was recommend by friend?</b></p><p>{state.record.review_votes==1?'Yes':'No'}</p>
                    <p><b>Review</b></p><p>{state.record.review_text}</p>
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
        <Row style={{height:'80vh'}}>
            <Col span={10} offset={7} >
            <h1 style={{textAlign:'center'}}>Review</h1>
                <Button 
                    
                    onClick={clickEditGameReview}>
                <EditOutlined 
                    style={{color:'blue'}}
                    />
                </Button>
                <Button
                    style={{float:'right'}}
                    onClick={clickDeleteGameReview}>
                    <DeleteOutlined 
                    style={{color:'red'}}
                    />
                </Button>
            <ReviewDescription/>
            </Col>
        </Row>
    );
}
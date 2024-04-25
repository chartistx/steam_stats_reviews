import { Col,Row,Table,Button} from 'antd';
import { useParams } from "react-router-dom";
import React, {useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useLocation } from 'react-router-dom';


export default function GameCard (){

    const {id} = useParams();//get game id from url
    const navigate = useNavigate();
    const { state } = useLocation();//get game data from previous page
    const [gameReviews, setGameReviews] = useState(null);  //holds game reviews data rows

    //on row click navigate to specific review
    function handleClick(record) {//gets data from clicked row
        navigate(`/games/review/${record.id}`, { state: { record: record } });
    }

    //clck on delete button, delte current game from database
    const clickDeleteGame=()=>{
        //send delete request to server
        fetch(`http://localhost:5000/games/${state.record.id}`, { method: 'DELETE' })
            .then(() => console.log("Delete successful"));
        //after delete navigate to home
        navigate(`/`);
        //refresh window so table is updated
        window.location.reload();
    }

    //click on edit button, go to edit game page
    const clickEditGame=()=>{
        navigate(`/games/edit/${id}`, { state: { record: state.record } });
    }

    //click on add new review button, go to new review page
    const clickAddNewGameReview = ()=> {
        //go to NewGame.jsx
        navigate(`/games/new_review`, { state: { record: state.record } });
      }

    //column names used in table
    const columnNames =[

        {
            title: 'review_score',
            dataIndex: 'review_score',
            key: 'review_score'
        },
        {
            title: 'review_votes',
            dataIndex: 'review_votes',
            key: 'review_votes'
        },
        {
            title: 'review_text',
            dataIndex: 'review_text',
            key: 'review_text'
        }
    ];

    useEffect(() => {

        //fetch game reviews
        fetch(`http://localhost:5000/api/game/reviews/${id}`)
        .then(res=>{
            return res.json();
        })
        .then(data=>{
            setGameReviews(data);//update game reviews variable that holds review data
        });
      }, []);
    
    //create review description
    function ReviewDescription () { //return game description
        if(state.record != null){
            return(
                <div style={{backgroundColor:'white',textAlign:'center', margin:'10px',padding:'10px',borderRadius:'10px'}}>
                    
                    <p><b>Game name: </b>{state.record.name}</p>
                    <p><b>Genre: </b>{state.record.genre}</p>
                    <p><b>Platform: </b>{state.record.platform}</p>
                    <p><b>Publisher: </b>{state.record.publisher}</p>
                    <p><b>Year: </b>{state.record.year}</p>
                    <p><b>Rank: </b>{state.record.rank}</p>
                    <p><b>NA Sales: </b>{state.record.na_sales}</p>
                    <p><b>EU Sales: </b>{state.record.eu_sales}</p>
                    <p><b>JP Sales: </b>{state.record.jp_sales}</p>
                    <p><b>Other Sales: </b>{state.record.other_sales}</p>
                    <p><b>Global Sales: </b>{state.record.global_sales}</p>
                </div>
            );
        }
        else return null;
    }

    //create game page // description on left // table with reviews on right side of page
    return (
        <Row>
            <Col span={6} >
                <h1 >Game Description</h1>
                <div style={{marginLeft:'10px'}}>
                    <Button
                        onClick={clickEditGame}>
                    <EditOutlined 
                        style={{color:'blue'}}
                        />
                    </Button>
                    <Button
                        onClick={clickDeleteGame}>
                        <DeleteOutlined 
                        style={{color:'red'}}
                        />
                    </Button>
                </div>
                
                
                
                
                <ReviewDescription />
            </Col>
            <Col span={18}>
                <h1 style={{textAlign:'center'}}>Reviews</h1>
                
                <Button style={{marginBottom:'10px',float:'right'}} key='clickAddNewReview' onClick={clickAddNewGameReview} type='primary'>Add New Review</Button>
                
                <Table 
                    //check on click and redirect to specific review
                    onRow={(record) => {
                        return {
                            onClick: () => {
                                console.log(`clicked on ${record.id}`);
                                handleClick(record);
                            }
                        };
                    }}
                    columns = {columnNames} 
                    dataSource = {gameReviews}>
                </Table>
            </Col>
        </Row>
    );
}
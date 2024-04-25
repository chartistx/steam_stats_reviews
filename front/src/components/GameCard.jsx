import { Col,Row,Table,Button} from 'antd';
import { useParams } from "react-router-dom";
import React, {useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

//compare number values for sorting
function compareNrVlues(var1,var2){
    var1=Number(var1);
    var2=Number(var2);
    return var1>var2?1:var1===var2?0:-1;
}

export default function GameCard (){
    const {id} = useParams();
    const navigate = useNavigate();
    const { state } = useLocation();

    //on row click navigate to specific review
    function handleClick(record) {
        //console.log(record);
        navigate(`/games/review/${record.id}`, { state: { record: record } });
    }

    //const [gameDescription, setGameData] = useState(null); //holds game description data rows
    const [gameReviews, setGameReviews] = useState(null);  //holds game reviews data rows

    const clickDeleteGame=()=>{
        //console.log(state.record.id);
        //send delete request to server
        fetch(`http://localhost:5000/games/${state.record.id}`, { method: 'DELETE' })
            .then(() => console.log("Delete successful"));
        //after delete navigate to home
        
        navigate(`/`);
        window.location.reload();
    }
    const clickEditGame=()=>{
        navigate(`/games/edit/${id}`, { state: { record: state.record } });
    }
    const clickAddNewGameReview = ()=> {
        //go to NewGame.jsx
        navigate(`/games/new_review`, { state: { record: state.record } });
      }
    //clumn names used in table
    const columnNames =[

        {
            title: 'review_score',
            dataIndex: 'review_score',
            key: 'review_score'
            // sorter: (row_1, row_2) => {
            //     return compareNrVlues(row_1.rank,row_2.rank);
            // }
        },
        {
            title: 'review_votes',
            dataIndex: 'review_votes',
            key: 'review_votes'
            // sorter: (row_1, row_2) => {
            //     return compareNrVlues(row_1.rank,row_2.rank);
            // }
        },
        {
            title: 'review_text',
            dataIndex: 'review_text',
            key: 'review_text'
        }
    ];

    useEffect(() => {
        //fetch game description
        // fetch(`http://localhost:5000/api/game/${id}`)
        // .then(res=>{
        //     //console.log(res);
        //     return res.json();
        // })
        // .then(data=>{
        //     console.log(data);
        //     setGameData(data);
        // });

        //fetch game reviews
        fetch(`http://localhost:5000/api/game/reviews/${id}`)
        .then(res=>{
            //console.log(res);
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setGameReviews(data);
        });
      }, []);
    
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
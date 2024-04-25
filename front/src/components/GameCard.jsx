import { Table,Button } from 'antd';
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

    const [gameDescription, setGameData] = useState(null); //holds game description data rows
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
        // {
        //     title: 'app_id',
        //     dataIndex: 'app_id',
        //     key: 'app_id',
        //     sorter: (row_1, row_2) => {
        //         return compareNrVlues(row_1.rank,row_2.rank);
        //     }
        // },
        // {
        //     title: 'app_name',
        //     dataIndex: 'app_name',
        //     key: 'app_name',
        //     sorter: (row_1, row_2) => {
        //         return compareVlues(row_1.rank,row_2.rank);
        //     }
        // },
        {
            title: 'review_score',
            dataIndex: 'review_score',
            key: 'review_score',
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.rank,row_2.rank);
            }
        },
        {
            title: 'review_votes',
            dataIndex: 'review_votes',
            key: 'review_votes',
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.rank,row_2.rank);
            }
        },
        {
            title: 'review_text',
            dataIndex: 'review_text',
            key: 'review_text'
        }
    ];

    useEffect(() => {
        //fetch game description
        fetch(`http://localhost:5000/api/game/${id}`)
        .then(res=>{
            //console.log(res);
            return res.json();
        })
        .then(data=>{
            console.log(data);
            setGameData(data);
        });

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
        if(gameDescription != null){
            return(
                <div>
                    <p>Game name: {gameDescription[0].name}</p>
                    <p>Genre: {gameDescription[0].genre}</p>
                    <p>Platform: {gameDescription[0].platform}</p>
                    <p>Publisher: {gameDescription[0].publisher}</p>
                    <p>Year: {gameDescription[0].year}</p>
                    <p>Rank: {gameDescription[0].rank}</p>
                    <p>NA Sales: {gameDescription[0].na_sales}</p>
                    <p>EU Sales: {gameDescription[0].eu_sales}</p>
                    <p>JP Sales: {gameDescription[0].jp_sales}</p>
                    <p>Other Sales: {gameDescription[0].other_sales}</p>
                    <p>Global Sales: {gameDescription[0].global_sales}</p>
                </div>
            );
        }
        else return null;
    }

    return (
        <div>
            <div>
                <h1 >Game Description</h1>
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
                
                
                
                <ReviewDescription/>
            </div>
            <div>
                <h1>Reviews</h1>
                
                <Button key='clickAddNewReview' onClick={clickAddNewGameReview}>Add New Review</Button>
                
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
            </div>
                       
            
        </div>
    );
}
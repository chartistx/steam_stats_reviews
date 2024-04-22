
import { Table, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';
//import React, {onClick } from 'react';
//import  { useNavigate , Router} from 'react-router-dom'
//compare values for sorting
function compareVlues(var1,var2){
    return var1>var2?1:var1===var2?0:-1;
}
function compareNrVlues(var1,var2){
    var1=Number(var1);
    var2=Number(var2);
    return var1>var2?1:var1===var2?0:-1;
}

const GameStatList = ({ gameStats }) => {

    const navigate = useNavigate();

    function handleClick( record) {//on row click navigate to specific game
        //console.log(`clicked on ${e}`);
        navigate(`/games/${record.id}`, { state: { record: record } });
    }

    function clickAddNewGame() {
        navigate(`/add_new_game`);
      }

    // const clickDeleteGame=(record)=>{
    //     console.log(`clicked on ${record.id}`);
    //     //fetch(`http://localhost:5000/games${record.id}`, { method: 'DELETE' })
    //     //.then(() => this.setState({ status: 'Delete successful' }));
    //     //window.location.reload();
    // }

    const columnNames =[
        // {
        //     title: 'id',
        //     dataIndex: 'id',
        //     key: 'id',
        //     sorter: (row_1, row_2) => {
        //         return compareVlues(row_1.id,row_2.id);//row_1.id>row_2.id?1:row_1.id===row_2.id?0:-1;
        //     }
        // },
        {
            title: 'rank',
            dataIndex: 'rank',
            key: 'rank',
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.rank,row_2.rank);
            }
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
            sorter: (row_1, row_2) => {
                
                return compareVlues(row_1.name,row_2.name);
            }
        },
        {
            title: 'platform',
            dataIndex: 'platform',
            key: 'platform',
            sorter: (row_1, row_2) => {
                return compareVlues(row_1.platform,row_2.platform);
            }
        },
        {
            title: 'year',
            dataIndex: 'year',
            key: 'year',
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.year,row_2.year);

            }
        },
        {
            title: 'genre',
            dataIndex: 'genre',
            key: 'genre',
            sorter: (row_1, row_2) => {
                return compareVlues(row_1.genre,row_2.genre);
            }
        },
        {
            title: 'publisher',
            dataIndex: 'publisher',
            key: 'publisher',
            sorter: (row_1, row_2) => {
                return compareVlues(row_1.publisher,row_2.publisher);
            }
        },
        {
            title: 'na_sales',
            dataIndex: 'na_sales',
            key: 'na_sales',
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.na_sales,row_2.na_sales);
            }
        },
        {
            title: 'eu_sales',
            dataIndex: 'eu_sales',
            key: 'eu_sales',
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.eu_sales,row_2.eu_sales);
            }
        },
        {
            title: 'jp_sales',
            dataIndex: 'jp_sales',
            key: 'jp_sales',
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.jp_sales,row_2.jp_sales);
            }
        },
        {
            title: 'other_sales',
            dataIndex: 'other_sales',
            key: 'other_sales',
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.other_sales,row_2.other_sales);
            }
        },
        {
            title: 'global_sales',
            dataIndex: 'global_sales',
            key: 'global_sales',
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.global_sales,row_2.global_sales);
            }
        },
        {
            title: 'review_count',
            dataIndex: 'review_count',
            key: 'review_count',
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.review_count,row_2.review_count);
                
            }
        }
        // {
        //     title: 'Actions',
        //     key: 'actions',
        //     render: (record) => {
        //         return (<>
        //             <EditOutlined style={{color:'blue'}}/>
        //             <DeleteOutlined 
        //                 style={{color:'red'}}
        //                 onClick={clickDeleteGame(record)}
        //                 key='delete_game'/>
        //         </>)
        //     }
        // },
    ];    

   

    return(
        
        <div>
            <Button key='clickAddNewStudent' onClick={clickAddNewGame}>Add New Game</Button>
            
            <Table 
            //check on click and redirect to game description and reviews
            onRow={(record) => {
                return {
                    onClick: () => {
                        //console.log(`clicked on ${record.id}`);
                        
                        handleClick(record);
                    }
                };
            }}
            columns = {columnNames} 
            dataSource = {gameStats}>
                </Table>   
            
        </div>
    );
}
export default GameStatList;
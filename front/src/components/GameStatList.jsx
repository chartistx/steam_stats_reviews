
import { Table, Button, Input, Col} from 'antd';
import { useNavigate } from "react-router-dom";
import { SearchOutlined} from '@ant-design/icons';

//compare string values // used for sorting
function compareVlues(var1,var2){
    return var1>var2?1:var1===var2?0:-1;
}

//compare number values // used for sorting
function compareNrVlues(var1,var2){
    var1=Number(var1);
    var2=Number(var2);
    return var1>var2?1:var1===var2?0:-1;
}


const GameStatList = ({ gameStats }) => {
    const navigate = useNavigate();

    //on row click navigate to specific game
    function handleClick( record) {
       navigate(`/games/${record.id}`, { state: { record: record } });
    }

    //clciked on add new game button
    function clickAddNewGame() {
        //go to NewGame.jsx // add new game page
        navigate(`/add_new_game`);
      }
    
    //column names used in table
    const columnNames =[
        {
            title: 'rank',
            dataIndex: 'rank',
            key: 'rank',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    
                    value={selectedKeys[0]}//holds value of search input
                    onChange={//on input change update saved value
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={//on enter press search and filter table
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={//on clicking off from input window search and filter table
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    {/* Buttons that are used in search window */}
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{//on search confirmation
                //convert nr to sring so it can be searched
                //value from search box and check if cell value contains search value
                //using lowercase to make search case insensitive
                return record.rank.toString().toLowerCase().includes(value);
            },

            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.rank,row_2.rank);
            }
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                //console.log(record);
                return record.name.toLowerCase().includes(value.toLowerCase());
            },
            sorter: (row_1, row_2) => {
                
                return compareVlues(row_1.name,row_2.name);
            }
        },
        {
            title: 'platform',
            dataIndex: 'platform',
            key: 'platform',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                //console.log(record);
                return record.platform.toLowerCase().includes(value.toLowerCase());
            },
            sorter: (row_1, row_2) => {
                return compareVlues(row_1.platform,row_2.platform);
            }
        },
        {
            title: 'year',
            dataIndex: 'year',
            key: 'year',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                //console.log(record);
                return record.year.toString().toLowerCase().includes(value);
            },
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.year,row_2.year);

            }
        },
        {
            title: 'genre',
            dataIndex: 'genre',
            key: 'genre',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                return record.genre.toLowerCase().includes(value.toLowerCase());
            },
            sorter: (row_1, row_2) => {
                return compareVlues(row_1.genre,row_2.genre);
            }
        },
        {
            title: 'publisher',
            dataIndex: 'publisher',
            key: 'publisher',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                //console.log(record);
                return record.publisher.toLowerCase().includes(value.toLowerCase());
            },
            sorter: (row_1, row_2) => {
                return compareVlues(row_1.publisher,row_2.publisher);
            }
        },
        {
            title: 'na_sales',
            dataIndex: 'na_sales',
            key: 'na_sales',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                
                return record.na_sales.toString().toLowerCase().includes(value);
            },
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.na_sales,row_2.na_sales);
            }
        },
        {
            title: 'eu_sales',
            dataIndex: 'eu_sales',
            key: 'eu_sales',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                //console.log(record);
                return record.eu_sales.toString().toLowerCase().includes(value);
            },
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.eu_sales,row_2.eu_sales);
            }
        },
        {
            title: 'jp_sales',
            dataIndex: 'jp_sales',
            key: 'jp_sales',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                
                return record.jp_sales.toString().toLowerCase().includes(value);
            },
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.jp_sales,row_2.jp_sales);
            }
        },
        {
            title: 'other_sales',
            dataIndex: 'other_sales',
            key: 'other_sales',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                //console.log(record);
                return record.other_sales.toString().toLowerCase().includes(value);
            },
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.other_sales,row_2.other_sales);
            }
        },
        {
            title: 'global_sales',
            dataIndex: 'global_sales',
            key: 'global_sales',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                //console.log(record);
                return record.global_sales.toString().toLowerCase().includes(value);
            },
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.global_sales,row_2.global_sales);
            }
        },
        {
            title: 'review_count',
            dataIndex: 'review_count',
            key: 'review_count',
            filterDropdown:({setSelectedKeys,selectedKeys,confirm,clearFilters, close})=>{
                return(
                    <>
                    <Input 
                    //refer to column "rank" for comments
                    style={{borderColor:'royalBlue',backgroundColor:'lavender'}} 
                    placeholder='Type here'
                    value={selectedKeys[0]}
                    onChange={
                        (e)=>{
                        setSelectedKeys(e.target.value? [e.target.value]:[]);
                        }
                    }
                    onPressEnter={
                        (e)=>{
                            confirm();
                        }
                    }
                    onBlur={
                        (e)=>{
                            confirm();
                        }
                    }
                    
                    />
                    <Button onClick={()=>confirm()} type='primary'>Search</Button>
                    <Button danger onClick={()=>clearFilters()} >Clear Filters</Button>
                    <Button default style={{float:'right'}} onClick={()=>close()} >Close</Button>
                    </>
                    
                );
            
            },
            filterIcon:()=>{
                return <SearchOutlined style={{color:'blue'}}/>
            },
            onFilter:(value,record)=>{
                //console.log(record);
                return record.review_count.toString().toLowerCase().includes(value);
            },
            sorter: (row_1, row_2) => {
                return compareNrVlues(row_1.review_count,row_2.review_count);
                
            }
        }
    ];    

   
    //create table with game statistics data and review count
    return(
        
        <>
            <Button type='primary' key='clickAddNewGame' onClick={clickAddNewGame}>Add New Game</Button>
            
            <Table  
            style={{marginTop:10}}  
            scroll={{
                x: window.innerWidth*0.8
              }}
            //check on click and redirect to game description and reviews
            span={18}
            onRow={(record) => {
                return {
                    onClick: () => {
                        //clicked on row 
                        // go to selected game description and select reviews
                        //go to GameCard.jsx
                        handleClick(record);
                    }
                };
            }}
            columns = {columnNames} 
            dataSource = {gameStats}>
                </Table>   
            
        </>
    );
}
export default GameStatList;
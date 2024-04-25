import React, { useEffect, useState } from 'react';
import './App.css';
import GameStatList from './components/GameStatList';
import GameCard from './components/GameCard';
import ReviewCard from './components/ReviewCard';
import NewGame from './components/NewGame';
import EditGame from './components/EditGame';
import EditGameReview from './components/EditGameReview';
import NewReview from './components/NewReview';
import  { BrowserRouter,Routes, Route ,Link} from 'react-router-dom';

import { Row,Col, Layout} from 'antd';
const { Header,Content,Footer} = Layout;



function App() {

  const [gameStats, setGameStats] = useState(null); 

  useEffect(() => {
    //fetch vgsales data with reviews count for each game
    fetch('http://localhost:5000/api/0')
      .then(res=>{
        //console.log(res);
        return res.json();
      })
      .then(data=>{
        //console.log(data);
        setGameStats(data);
      });
  }, []);
  
  

  return (
  <>
    <BrowserRouter>
      <Row >
        <Col style={{width: '100%'}}>
        <Header style={{textAlign:'center', fontWeight: 'bold', backgroundColor:'midnightBlue',height:'80px'}} >
          <Link to='/'>GAME STATS</Link>
        </Header>
        </Col>
      </Row>
        <Content style={{backgroundColor:'lightBlue',paddingTop:'20px', minHeight:'80vh'}}>
          <Row>
            <Col span={18} offset={3}>
              <Routes>
                <Route path="/" element={<GameStatList gameStats={gameStats} />} />
                <Route path="/add_new_game" element={<NewGame/>} />

                <Route path="/games/new_review" element={<NewReview/>} />
                <Route path="/games/:id" element={<GameCard/>} />

                <Route path="/games/edit/:id" element={<EditGame/>} />
                <Route path="/games/review/:id" element={<ReviewCard/>} />
                
                <Route path="/games/review/edit/:id" element={<EditGameReview/>} />
              </Routes>
            </Col>
          </Row>
      </Content>
      <Footer style={{backgroundColor:'midnightBlue', color: 'white'}}><p style={{ textAlign:'right'}}>Steam statistics 2024</p></Footer>
    </BrowserRouter>
  </>
  );
}

export default App;

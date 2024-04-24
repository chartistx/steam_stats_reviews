import React, { useEffect, useState } from 'react';
import './App.css';
import GameStatList from './components/GameStatList';
import GameCard from './components/GameCard';
import ReviewCard from './components/ReviewCard';
import NewGame from './components/NewGame';
import EditGame from './components/EditGame';
import EditGameReview from './components/EditGameReview';
import  { BrowserRouter,Routes, Route ,Link} from 'react-router-dom';



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
    <div>
      
        <BrowserRouter>


          <h1><Link to='/'>Game Stats</Link></h1>
          <Routes>
            <Route path="/" element={<GameStatList gameStats={gameStats} />} /> 
            <Route path="/games/:id" element={<GameCard/>} />
            <Route path="/games/review/:id" element={<ReviewCard/>} />
            <Route path="/add_new_game" element={<NewGame/>} />
            <Route path="/games/edit/:id" element={<EditGame/>} />
            <Route path="/games/review/edit/:id" element={<EditGameReview/>} />
          </Routes>

          
        </BrowserRouter>
      
    </div>
  );
}

export default App;

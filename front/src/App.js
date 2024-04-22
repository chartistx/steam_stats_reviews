import React, { useEffect, useState } from 'react';
import './App.css';
import GameStatList from './components/GameStatList';
import GameCard from './components/GameCard';
import ReviewCard from './components/ReviewCard';
import  { BrowserRouter,Routes, Route } from 'react-router-dom';



function App() {
  // const router = createBrowserRouter([
  //   { path: '/:', 
  //   element: <GameStatList />,
  //   errorElement: <div>404 Not Found</div>}
  // ]);

  //const [count, setCount] = useState(() => 0);
  
  const [gameStats, setGameStats] = useState(null); 
  
  // function dec() {
  //   if (count === 0) return;
  //   setCount(count - 1);
  // }
  // function inc() {
  //   setCount(count + 1);
  // }

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
      <div>
      <h2>table</h2>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GameStatList gameStats={gameStats} />} /> 
            <Route path="/games/:id" element={<GameCard/>} />
            <Route path="/games/review/:id" element={<ReviewCard/>} />

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

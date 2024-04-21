import React, { useEffect, useState } from 'react';
import './App.css';
import GameStatList from './components/GameStatList';
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
    //problem with sql, LEFT JOIN is needed instead of JOIN, also then 
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
        {/* <RouterProvider router={router}/> */}
        {/* {`
        //gameStats && <GameStatList gameStats={gameStats}/>  //if gameStats are not empty then show data
        //`} */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GameStatList gameStats={gameStats} />} /> 
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

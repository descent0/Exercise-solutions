import React, { useState } from 'react';
import './App.css';

function App() {

  const [flag, setFlag] = useState(true);

  const players = [
    { name: 'Mr. Jack', score: 50 },
    { name: 'Mr. Michael', score: 70 },
    { name: 'Mr. John', score: 40 },
    { name: 'Mr. Ann', score: 61 },
    { name: 'Mr. Elizabeth', score: 61 },
    { name: 'Mr. Sachin', score: 95 },
    { name: 'Mr. Dhoni', score: 100 },
    { name: 'Mr. Virat', score: 84 },
    { name: 'Mr. Jadeja', score: 64 },
    { name: 'Mr. Rohit', score: 80 },
    { name: 'Mr. Rahul', score: 75 }
  ];

  const playersBelow70 = players.filter(item => item.score <= 70);

  const toggleFlag = () => {
    setFlag(!flag);
  };

  return (
    <div className="App">
      <button onClick={toggleFlag}>{`ToggleFlag :${flag}`}</button>
      
      {flag ? (
        <div>
          <h1>List of Players</h1>
          {players.map((item, index) => (
            <div key={index}>
              <li>{item.name} | {item.score}</li>
            </div>
          ))}
          
          <h1>List of Players having Scores Less than 70</h1>
          {playersBelow70.map((item, index) => (
            <div key={index}>
              <li>{item.name} | {item.score}</li>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          
          <h1>Odd Players</h1>
          {players.filter((_, index) => index % 2 === 0).map((item, index) => (
            <div key={index}>
              <li>{item.name}</li>
            </div>
          ))}
          
          <h1>Even Players</h1>
          {players.filter((_, index) => index % 2 !== 0).map((item, index) => (
            <div key={index}>
              <li>{item.name}</li>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
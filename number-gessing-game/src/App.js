import React, { useState,useEffect } from 'react';
import './App.css';
import { FaTrophy } from 'react-icons/fa';
import leaderboardData from './json.json';

function App() {
  const [tries, setTries] = useState(0);
  const [guess, setGuess] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    // Assuming leaderboardData is the default export from the JSON file
    setLeaderboard(leaderboardData);
  }, []);

  const handleGuessSubmit = () => {
    // Implement your guess handling logic here
    setTries(tries + 1);
  };

  return (
    <div className="App">
      <header className="App-header">
        How many Pepsi cans would it take to reach the moon?
      </header>
      <div className="Game-container">
        <div className="Guess-section">
          <input
            type="text"
            placeholder="Guess"
            className="Guess-input"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <button className="Submit-button" onClick={handleGuessSubmit}>
            Submit
          </button>
          <div className="Tries-counter">Tries: {tries}</div>
        </div>
        <div className="Leaderboard-trophy">
          <div className="Leaderboard">
            <h2>LeaderBoard</h2>
            {leaderboard
              .slice(0, 15)
              .map((entry, index) => (
                <div key={index} className="Leaderboard-entry">
                    
                  {entry.name} : {entry.score}
                </div>
              ))
            }
          </div>
          <div className="Trophy-section">
          <FaTrophy className="Trophy-icon" />
            {/* Add more icons as needed */}
          </div>
        </div>
      </div>
      <div className="Footer">
        {/* Footer content goes here */}
      </div>
    </div>
  );
}

export default App;

import React, { useState,useEffect } from 'react';
import './App.css';
import { FaTrophy } from 'react-icons/fa';
import leaderboardData from './json.json';

function App() {
  const [tries, setTries] = useState(3);
  const [guess, setGuess] = useState('');
  const [numberToGuess] = useState(55)
  const [leaderboard, setLeaderboard] = useState([]);
  const [guessResult, setGuessResult] = useState('');
  const [difference, setDifference] = useState(0);


  useEffect(() => {
    // Assuming leaderboardData is the default export from the JSON file
    setLeaderboard(leaderboardData);
  }, []);

  const handleGuessSubmit = () => {
    // Implement your guess handling logic here
    if (parseInt(guess) === numberToGuess) {
      setTries(tries - 1);
      setGuessResult('correct');
      return;
    }
    else if (parseInt(guess) > numberToGuess) {
        var diff = Math.abs(parseInt(guess) - numberToGuess);
        setDifference(diff);
        setTries(tries - 1);
        setGuessResult('high');
        return;
    }
    else {
        diff = Math.abs(parseInt(guess) - numberToGuess);
        setDifference(diff);
        setTries(tries - 1);
        setGuessResult('low');
        return;
    }
       
  };

  const ArrowIndicator = ({ guessResult }) => {
    const arrowStyle = {
      width: 0, 
      height: 0, 
      borderLeft: '10px solid transparent',
      borderRight: '10px solid transparent',
      margin: 'auto',
    };
  
    if (guessResult === 'correct') {
      return  null; 
    } else if (guessResult === 'high') {
      return <div style={{ ...arrowStyle, borderTop: '20px solid yellow' }}></div>;
    } else if (guessResult === 'low') {
      return <div style={{ ...arrowStyle, borderBottom: '20px solid yellow' }}></div>;
    } else {
      return null; // No arrow if there's no guess yet
    }
  };
  
  return (
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>,
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
          <ArrowIndicator guessResult={guessResult} />
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

// Waiting.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { playerList } from '../global.js';
import './Waiting.css';

function Waiting() {
  const [idx, setIdx] = useState(0);
  const endsWithS = (n) => n.trim().toLowerCase().endsWith('s');

  const [header, setHeader] = useState(
    `It's ${playerList[0].name}${endsWithS(playerList[0].name) ? "'" : "'s"} Turn. . .`
  );
  const [subtitle, setSubtitle] = useState('Wait until your turn!');

  useEffect(() => {
    const id = setTimeout(() => {
      if (idx <= playerList.length - 2) {
        const p = playerList[idx];
        setHeader(`It's ${p.name}${endsWithS(p.name) ? "'" : "'s"} Turn. . .`);
        setIdx((i) => i + 1);
      } else if (idx === playerList.length - 1) {
        setHeader('Its Your Turn. . .');
        setSubtitle('Time to Choose Your Athlete!');
      }
    }, 1000);
    return () => clearTimeout(id);
  }, [idx]);

  return (
    <div className="waitingPage">
      <div className="hero">
        <h1 className="header">{header}</h1>
        <h3 className="subtitle">{subtitle}</h3>

        {header === 'Its Your Turn. . .' && (
          <Link to="/userchoice">
            <button className="nextButton">Next</button>
          </Link>
        )}
      </div>

      <div className="circle" aria-hidden="true" />
    </div>
  );
}

export default Waiting;




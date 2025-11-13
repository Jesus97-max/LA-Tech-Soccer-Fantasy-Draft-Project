// Waiting.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { playerList } from '../global.js';
import './Waiting.css';

function Waiting() {
// Index Variable that we will use to keep track of players
let [idx, setIdx] = useState(0);


// Header variable that we will use to keep track of the current header
let [header, setHeader] = useState("It's " + playerList[idx].name + (endsWithS(playerList[idx].name) ? "'" : "'s")  + " Turn. . .");


// Subtitle variable that we will use to keep track of the current subtitle
let [subtitle, setSubtitle] = useState("Wait until your turn!");


// Function meant to check if a users name ends with s
  function endsWithS(name){
     return (name).trim().toLowerCase().endsWith("s");
  }


// Use Effect function to help us change idx, subtitle and header
useEffect(function(){
    // Set Up Timeout to Display Players
    const id = setTimeout(function() {  
        // Check if it is not the users turn
        if(idx <= playerList.length-2){  
            // If its not the users turn change the header message
            setHeader("It's " + playerList[idx].name + (endsWithS(playerList[idx].name) ? "'" : "'s")  + " Turn. . .");
            // If its not the users turn increment idx by 1
            setIdx(i => (i+1));
        }
        // Check if its the users turn
        else if(idx == playerList.length-1){
            // If it is the users turn change the header message
            setHeader("Its Your Turn. . .");
            // If its the users turn, change the subtitle
            setSubtitle("Time to Choose Your Athlete!");  
        }
    }, 2000);


    // use clearTimeout to avoid errors
    return () => clearTimeout(id);
   }, [idx, playerList.length]);

  return (
    <div className="waitingPage">
      <div className="hero">
        <h1 className="header">{header}</h1>
        <h3 className="subtitle">{subtitle}</h3>

        {(header == "Its Your Turn. . .")? (
        <Link to="/userchoice">
        <button className="nextButton" type="button">Next</button>
        </Link>
        ) : null}
      </div>

      <div className="circle" aria-hidden="true" />
    </div>
  );
}

export default Waiting;




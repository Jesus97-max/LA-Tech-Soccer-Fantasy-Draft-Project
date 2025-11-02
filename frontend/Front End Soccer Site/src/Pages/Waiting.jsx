import { playerList } from '../global.js';
import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Waiting.css';  
import axios from 'axios'; 
import api from '../api/data'; 

function Waiting(){

    // So I really need to do setAtheletes(player id); 
  /*  axios.get('players').then(res) => {
            const list = Array.isArray(res.data) ? res.data : res.data.players; 
    }
    } */ 
   // Figure out limit of how many players we have 
   // Go through each id (Num of Players) 
   // How to check every 5 sec whether log in is true
// Index Variable that we will use to keep track of players 

let [idx, setIdx] = useState(0); // null 

// Header variable that we will use to keep track of the current header (Need to get id version of playerList[0].name )
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
    const id = setTimeout(function() {  // This needs to become a 5 sec timer that checks if you are signed in and if you are do idx + 1
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
    }, 1000);

    // use clearTimeout to avoid errors 
    return () => clearTimeout(id); 
   }, [idx, playerList.length]); 

    return(
        <div className="wrapper">
        <div className="textWrapper">
        <h1 className ="header">{header}</h1>
        <h3 className ="subtitle">{subtitle}</h3>
        </div>
        {(header == "Its Your Turn. . .")? (
            <Link to="/userchoice">
            <button className="nextButton" type="button">Next</button>
            </Link>
        ) : null}
        <div className="circle"></div>
        </div>
    ); 
}    

export default Waiting



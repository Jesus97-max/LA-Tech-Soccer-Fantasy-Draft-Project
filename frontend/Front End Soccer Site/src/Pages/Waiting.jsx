import { playerList } from '../global.js';
import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import './Waiting.css';  

function Waiting(){

  function endsWithS(name){
     return (name).trim().toLowerCase().endsWith("s"); 
  }


let [idx, setIdx] = useState(0); 
let [header, setHeader] = useState("It's " + playerList[idx].name + (endsWithS(playerList[idx].name) ? "'" : "'s")  + " Turn. . ."); 
let [subtitle, setSubtitle] = useState("Wait until your turn!"); 

      //     if(idx === playerList.length-2) setHeader("Its Your Turn. . ."); 
   useEffect(function(){
    const id = setTimeout(function() {  
   // if(idx > playerList.length-2) return; 
    // console.log(idx); 
    // console.log(header);  // 0 1 2 3  
    if(idx <= playerList.length-2){ // 0 1 2 
    // setHeader("It's " + playerList[idx].name + "'s Turn. . .");
    setHeader("It's " + playerList[idx].name + (endsWithS(playerList[idx].name) ? "'" : "'s")  + " Turn. . .");
    setIdx(i => (i+1));
    }
    else if(idx == playerList.length-1){
        setHeader("Its Your Turn. . ."); // 0 1 2 3
        setSubtitle("Time to Choose Your Athlete!"); 
    }
}, 1000);
    return () => clearTimeout(id); // One timer at a time 
   }, [idx, playerList.length]); 

   // if s is the last character in a namr

//         <h1 id="waitingTitle">It's {waitPlayer}'s Turn</h1>
// It's {playerList[idx].name}'s Turn
    return(
        <>
        <div className="wrapper">
        <div className="circle"></div>
        <h1 className ="header">{header}</h1>
        <h3 className ="subtitle">{subtitle}</h3>
     <Link to="/userchoice"> 
        <button className ="nextButton">Next</button>
        </Link>
        </div>
        </>
    ); 
}    

export default Waiting



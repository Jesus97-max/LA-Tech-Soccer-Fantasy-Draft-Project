import { useState } from 'react';
import { playerList, athleteList, roundCounter, selected } from "../global.js";
//import mockAthletes from '../mockPlayers.jsx';


function UserChoice(){
    return(
        <div className="player-select-page">
            <div className='status-container'>
                <pre> Current Round: {roundCounter}                                           Points Left: </pre>
            </div>

            <h2>Available Athletes</h2>
            
            <div className='athletes-container'>
                <div className='athletes-header'>
                    <h2>Player Name</h2>
                    <h2>Points</h2>
                    <h2>Stat 1</h2>
                    <h2>Stat 2</h2>
                    <h2>Stat 3</h2>
                    <h2>Stat 4</h2>
                    <h2>Stat 5</h2>
                    <h2>Points Cost</h2>
                </div>

                <div className='athletes-list flex'>
                    {athleteList.map((athlete) => (
                    <div key={athlete.id} className="player-row">
                    <span>{`Player ${athlete.id}`}</span>
                    <span>#</span>
                    <span>{athlete.statOne}</span>
                    <span>{athlete.statTwo}</span>
                    <span>{athlete.statThree}</span>
                    <span>{athlete.statFour}</span>
                    <span>{athlete.pointCost}</span>
                    </div>
                ))}
                </div>


            </div>

             <div style={{ overflow: 'hidden' }}> {}
                <button style={{ float: 'right', marginRight: '20px' }}> Select</button>
            </div>


        </div>
    ); 
}

export default UserChoice  
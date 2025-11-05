import { useState } from 'react';
import { playerList, athleteList, roundCounter, selected } from "../global.js";
//import mockAthletes from '../mockPlayers.jsx';


function UserChoice(){

    const [selectedAthlete, setSelectedAthlete] = useState(null);

    return(
        <div className="player-select-page">
            <div className='status-container'>
                <pre> Current Round: {roundCounter}                                           Points Left: </pre>
            </div>

            <div className='status-container'>
                <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                {selectedAthlete ? (
                <div>
                <div>Selected Player: {selectedAthlete.name || `Player ${selectedAthlete.id}`}</div>
                <div>Stat 1: {selectedAthlete.statOne}</div>
                <div>Stat 2: {selectedAthlete.statTwo}</div>
                <div>Stat 3: {selectedAthlete.statThree}</div>
                <div>Stat 4: {selectedAthlete.statFour}</div>
                <div>Points Cost: {selectedAthlete.pointCost}</div>
                </div>
                ) : ("No athlete selected")}
                </div>
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
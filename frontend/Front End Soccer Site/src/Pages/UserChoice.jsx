import { useState, useEffect } from 'react';
import { playerList, athleteList, roundCounter, selected } from "../global.js";
//import mockAthletes from '../mockPlayers.jsx';

const API_URL = 'http://localhost:3000/draft';

function UserChoice(){

    const [selectedAthlete, setSelectedAthlete] = useState(null);
    const [availablePlayers, setAvailablePlayers] = useState([]);
    const [currentRound, setCurrentRound] = useState(1);
    const [pointsLeft, setPointsLeft] = useState(100);
    const [currentTeam, setCurrentTeam] = useState([]);
    const [currentParticipant, setCurrentParticipant] = useState(null);

    // useEffect( () => {
    //     fetchDraftState();
    // }, []);
    
    useEffect(() => {
        initializeDraft();
    }, []);

    // Initialize the draft with participants
    const initializeDraft = async () => {
        try {
            const resetResponse = await fetch(`${API_URL}/reset`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    participants: [
                        { participantId: "user1", teamId: "team1", order: 0, team: [] },
                        { participantId: "user2", teamId: "team2", order: 1, team: [] }
                    ]
                })
            });
            
            if (resetResponse.ok) {
                fetchDraftState();
            }
        } catch (error) {
            console.error('Error initializing draft:', error);
        }
    };

    const fetchDraftState = async () => {
        try {
            const response = await fetch(`${API_URL}/state`);
            const data = await response.json();

            console.log('Draft state:', data); // Debug log
            
            setCurrentRound(data.currentRound);
            
            // Get current participant
            const participant = data.participants[data.currentParticipantIndex];
            setCurrentParticipant(participant);
            setCurrentTeam(participant.team);
            
            // Calculate points left
            const usedPoints = participant.team.reduce((sum, player) => sum + player.cost, 0);
            setPointsLeft(100 - usedPoints);
            
            // Get available players (not picked yet)
            const selectedIds = Array.isArray(data.selectedPlayerIds) 
            ? data.selectedPlayerIds 
            : Array.from(data.selectedPlayerIds || []);

            const available = data.availablePlayers.filter(
            player => !selectedIds.includes(String(player.id))
            );

            setAvailablePlayers(available);
            
        } catch (error) {
            console.error('Error fetching draft state:', error);
        }
    };

    const handlePlayerClick = (player) => {
        setSelectedAthlete(player);
    };

    const handleSelect = async () => {
        if (!selectedAthlete) {
            alert("Please select a player first!");
            return;
        }

        if (selectedAthlete.cost > pointsLeft) {
            alert("Not enough points to select this player!");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/pick`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ playerId: String(selectedAthlete.id) })
            });

            const result = await response.json();
            
            if (result.ok) {
                alert(result.message);
                setSelectedAthlete(null);
                fetchDraftState(); // Refresh the state
            } else {
                alert(result.message || 'Failed to pick player');
            }
        } catch (error) {
            console.error('Error picking player:', error);
            alert('Error picking player');
        }
    };

    return(
        <div className="player-select-page">
            <div className='status-container'>
                <pre> Current Round: {currentRound}                                           Points Left: </pre>
            </div>

           <div className='status-container'>
                <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
                    <div>Your Team ({currentTeam.length} players):</div>
                    {currentTeam.length > 0 ? (
                        currentTeam.map((player, idx) => (
                            <div key={idx}>
                                {idx + 1}. {player.name} ({player.position}) - {player.cost} pts
                            </div>
                        ))
                    ) : (
                        <div>No players selected yet</div>
                    )}
            </div>
        </div>

            <h2>Available Athletes</h2>
            
            <div className='athletes-container'>
                <div className='athletes-header'>
                    <h2>    Player Name</h2>
                    <h2>Position</h2>
                    <h2>Club</h2>
                    <h2>Points Cost</h2>
                </div>

                <div className='athletes-list flex'>
                    {availablePlayers.map((athlete) => (
                    <div 
                        key={athlete.id} 
                        onClick={() => handlePlayerClick(athlete)}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '2fr 1fr 2fr 1fr',
                            padding: '10px',
                            cursor: 'pointer',
                            backgroundColor: selectedAthlete?.id === athlete.id ? '#f4a460' : 'transparent',
                            borderRadius: '5px',
                            marginBottom: '5px',
                            border: selectedAthlete?.id === athlete.id ? '2px solid #d4941f' : 'none'
                        }}
                    >
                        <div>{athlete.name}</div>
                        <div>{athlete.position}</div>
                        <div>{athlete.club}</div>
                        <div>{athlete.cost}</div>
                    </div>
                ))}
                </div>


            </div>

            <div style={{ overflow: 'hidden' }}>
                <button 
                    style={{ float: 'right', marginRight: '20px' }}
                    onClick={handleSelect}
                >
                    Select
                </button>
            </div>


        </div>
    ); 
}

export default UserChoice  
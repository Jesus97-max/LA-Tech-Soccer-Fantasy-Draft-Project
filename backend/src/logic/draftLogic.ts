
//Type Definitions
type Player = {
  id: string;
  name: string;
  position: string;
  cost: number;
  club: string;
};

type Participant = {
  participantId: string;
  teamId: string;
  order: number;
};

type DraftGameState = {
  currentRound: number;
  currentParticipantIndex: number;
  participants: Participant[];
  selectedPlayerIds: Set<string>;
};

//Global Game State
let draftGameState: DraftGameState = {
  currentRound: 1,
  currentParticipantIndex: 0,
  participants: [
    { participantId: "user1", teamId: "team1", order: 0 },
    { participantId: "user2", teamId: "team2", order: 1 },
  ],
  selectedPlayerIds: new Set(),
};

//Functions

//Returns the participant whose turn it currently is
export function getCurrentParticipant(): Participant {
  return draftGameState.participants[draftGameState.currentParticipantIndex];
}

//Picks a player for the current participant
export function pickPlayer(playerUniqueId: string) {
  if (!playerUniqueId) {
    return { success: false, message: "Player ID is missing." };
  }

  if (draftGameState.selectedPlayerIds.has(playerUniqueId)) {
    return { success: false, message: "Player has already been picked." };
  }

  draftGameState.selectedPlayerIds.add(playerUniqueId);
  return { success: true, message: "Player successfully picked!" };
}

//Moves the turn to the next participant
export function moveToNextTurn() {
  draftGameState.currentParticipantIndex++;

  //If we've reached the end of the participants list, start a new round
  if (draftGameState.currentParticipantIndex >= draftGameState.participants.length) {
    draftGameState.currentParticipantIndex = 0;
    draftGameState.currentRound++;
  }
}

//Returns the current overall state of the draft
export function getDraftState() {
  return draftGameState;
}

//Resets the entire draft for testing or starting a new game
export function resetDraftGame(newParticipants: Participant[]) {
  draftGameState = {
    currentRound: 1,
    currentParticipantIndex: 0,
    participants: newParticipants.sort((a, b) => a.order - b.order),
    selectedPlayerIds: new Set(),
  };
}

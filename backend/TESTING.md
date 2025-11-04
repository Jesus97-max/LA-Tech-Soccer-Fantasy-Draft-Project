# Set Up

1. Open PowerShell inside the backend folder:

npm install
npm run dev

2. Confirm your terminal shows:

Backend running on http://localhost:3000

# Routes to Test

1. Health Check

irm http://localhost:3000/health

Expected:

  ok
  --
True


2. Get Full Draft State

irm http://localhost:3000/draft/state

Expected:

{
  "currentRound": 1,
  "currentParticipantIndex": 0,
  "participants": [
    { "participantId": "user1", "teamId": "team1", "order": 0 },
    { "participantId": "user2", "teamId": "team2", "order": 1 }
  ],
  "selectedPlayerIds": {}
}

3. Check Turn

irm http://localhost:3000/draft/turn

Expected:

{
  "participant": {
    "participantId": "user1",
    "teamId": "team1",
    "order": 0
  }
}


4. Player Availability 

irm http://localhost:3000/draft/is-available/p1


Expected:

{
  "playerId": "p1",
  "available": true
}

5. Pick Player

$body = @{ playerId = "p1" } | ConvertTo-Json
$headers = @{ "Content-Type" = "application/json" }
irm -Method Post -Uri http://localhost:3000/draft/pick -Headers $headers -Body $body


Expected:

{
  "ok": true,
  "message": "Player successfully picked!",
  "state": {
    "currentRound": 1,
    "currentParticipantIndex": 1
  }
}


6. Duplicate Player

irm -Method Post -Uri http://localhost:3000/draft/pick -Headers $headers -Body $body

Expected:

{
  "success": false,
  "message": "Player has already been picked."
}


7. Reset the Draft

$reset = @{
  participants = @(
    @{ participantId="user1"; teamId="team1"; order=0 },
    @{ participantId="user2"; teamId="team2"; order=1 }
  )
} | ConvertTo-Json

irm -Method Post -Uri http://localhost:3000/draft/reset -Headers @{ "Content-Type"="application/json" } -Body $reset


Expected:

Resets the round and participant index back to the start.
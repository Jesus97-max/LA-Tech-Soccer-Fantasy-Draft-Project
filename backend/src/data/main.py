import os
import json
from fastapi import FastAPI
from mangum import Mangum
from championsLeagueAPI import ChampionsLeague  # same folder

app = FastAPI()

# constants / defaults
PLAYERS = int(os.environ.get("PLAYERS", 200))
PAGE = int(os.environ.get("PAGE", 0))

# load and prepare data once when Lambda cold-starts
cl = ChampionsLeague(players_to_retrieve=PLAYERS, page_number=PAGE)
data = cl.retrieve_data()
cl.extract_info(data)
players_df, teams_df = cl.clean()

def to_cost(row: dict) -> float:
    g = row.get("goals") or 0
    a = row.get("assists") or 0
    try:
        return round(8 + 0.5 * float(g) + 0.3 * float(a), 1)
    except Exception:
        return 8.0

@app.get("/players")
def get_players():
    """Return player data."""
    records = [
        {
            "id": str(r.get("player_id")),
            "name": r.get("name") or "",
            "position": r.get("position") or "UNK",
            "cost": to_cost(r),
            "club": r.get("team_name") or "",
        }
        for _, r in players_df.iterrows()
    ]
    return records

@app.get("/teams")
def get_teams():
    """Return team data."""
    return teams_df.to_dict(orient="records")

# entry point for AWS Lambda
handler = Mangum(app)

# local dev support
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=False)

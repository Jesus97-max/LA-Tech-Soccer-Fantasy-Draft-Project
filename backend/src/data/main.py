# Run in terminal from root dir: uvicorn backend.src.data.main:app --host 127.0.0.1 --port 8000
from fastapi import FastAPI
from backend.src.data.championsLeagueAPI import ChampionsLeague

app = FastAPI()

# Load data once when the app starts
players = int(input("Please input the amount of players to retrieve: "))
page = int(input("What page to start retrieving players: "))

cl_request = ChampionsLeague(players, page)
data = cl_request.retrieve_data()
cl_request.extract_info(data)

players_df, teams_df = cl_request.clean()


@app.get("/players")
def get_players():
    print("Accessing /players endpoint")
    print(f"Number of players: {len(players_df)}")
    players_data = players_df.to_dict(orient="records")
    return players_data


@app.get("/teams")
def get_teams():
    print("Accessing /teams endpoint")
    print(f"Number of teams: {len(teams_df)}")
    teams_data = teams_df.to_dict(orient="records")
    return teams_data


# Optional: for testing locally (e.g., python main.py)
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8000, reload=False)

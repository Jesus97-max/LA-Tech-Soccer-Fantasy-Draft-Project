import os
import sys
import json

# Make sure championsLeagueAPI.py can be imported
CURRENT_DIR = os.path.dirname(__file__)
sys.path.append(CURRENT_DIR)

from championsLeagueAPI import ChampionsLeague  # noqa: E402

PLAYERS = 200
OFFSET = 0

def to_cost(row: dict) -> float:
    g = row.get("goals") or 0
    a = row.get("assists") or 0
    try:
        return round(8 + 0.5 * float(g) + 0.3 * float(a), 1)
    except Exception:
        return 8.0

def main() -> None:
    cl = ChampionsLeague(players_to_retrieve=PLAYERS, page_number=OFFSET)
    data = cl.retrieve_data()
    cl.extract_info(data)
    players_df, _teams_df = cl.clean()

    records = []
    for _, row in players_df.iterrows():
        records.append({
            "id": str(row.get("player_id")),
            "name": row.get("name") or "",
            "position": row.get("position") or "UNK",
            "cost": to_cost(row),
            "club": row.get("team_name") or ""
        })

    out_dir = os.path.join(CURRENT_DIR, "generated")
    os.makedirs(out_dir, exist_ok=True)
    out_path = os.path.join(out_dir, "players.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False, indent=2)

    print(f"✅ Wrote {len(records)} players → {out_path}")

if __name__ == "__main__":
    main()

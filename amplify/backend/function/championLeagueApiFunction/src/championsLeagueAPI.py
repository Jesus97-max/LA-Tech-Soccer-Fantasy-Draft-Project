import pandas as pd
import requests

# Definition of the ChampionsLeague class
class ChampionsLeague:

    player_columns = ["name", "player_image", "player_id", "age", "birthDate", "gender","weight","height","position","country_code", "team_name", "team_logo", "minutes_played_official", "matches_appearance", "goals", "assists", "distance_covered", "top_speed"]
    team_columns = ["team_name", 'team_logo', 'team_code']

    # Declaration of the constructor
    def __init__(self, players_to_retrieve = 1, page_number = 0, player_df = None, team_df = None):
        self.players_to_retrieve = players_to_retrieve
        self.page_number = page_number
        self.url = f"https://compstats.uefa.com/v1/player-ranking?competitionId=1&limit={self.players_to_retrieve}&offset={self.page_number}&optionalFields=PLAYER%2CTEAM&order=DESC&phase=TOURNAMENT&seasonYear=2025&stats=matches_appearance%2Cminutes_played_official%2Cgoals%2Cassists%2Cdistance_covered%2Ctop_speed"
        if player_df is None:
            player_df = pd.DataFrame(columns = self.player_columns)
        self.player_df = player_df

        if team_df is None:
            team_df = pd.DataFrame(columns = self.team_columns)
        self.team_df = team_df

    # Method to retrieve data from the API    
    def retrieve_data(self):
        
        headers ={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
        }

        response = requests.get(self.url, headers = headers)

        data = response.json()
        response.encoding = 'utf-8'

        return data
    
    # Method to extract relevant information from the retrieved data
    def extract_info(self, data): 
        
        for i, n in enumerate(data):
            player_info = []
            team_info = []
            # This will be for Player's general info
            try:
                

                international_name = data[i]["player"].get("internationalName")
                if international_name is None:
                    #print("International Name is None")
                    continue
                else:
                    player_info.append(international_name)

                image_url = data[i]["player"].get("imageUrl")
                if image_url is None:
                    #print("Image URL is None")
                    continue
                else:
                    player_info.append(image_url)
                
                player_id = data[i].get("playerId")
                if player_id is None:
                    #print("Player ID is None")
                    continue
                else:
                    player_info.append(player_id)
                
                age = data[i]["player"].get("age")
                if age is None:
                    #print("Age is None")
                    continue
                else:
                    player_info.append(age)

                birth_date = data[i]["player"].get("birthDate")
                if birth_date is None:
                    #print("Birth Date is None")
                    continue
                else:
                    player_info.append(birth_date)

                gender = data[i]["player"].get("gender")
                if gender is None:
                    #print("Gender is None")
                    continue
                
                else:
                    player_info.append(gender)

                height = data[i]["player"].get("height")
                if height is None:
                    #print("Height is None")
                    continue
                else:
                    player_info.append(height)

                weight = data[i]["player"].get("weight")
                if weight is None:
                    #print("Weight is None")
                    continue
                else:
                    player_info.append(weight)

                field_position = data[i]["player"].get("fieldPosition")
                if field_position is None:
                    #print("Field Position is None")
                    continue
                else:
                    player_info.append(field_position)

                country_code = data[i]["player"].get("countryCode")
                if country_code is None:
                    #print("Country Code is None")
                    continue
                else:
                    player_info.append(country_code)

                team_international_name = data[i].get("team", {}).get("translations", {}).get("displayOfficialName", {}).get("EN")
                if team_international_name is None:
                    #print("Team International Name is None")
                    continue
                else:
                    player_info.append(team_international_name)
                    team_info.append(team_international_name)

                medium_logo_url = data[i]["team"].get("mediumLogoUrl")
                if medium_logo_url is None:
                    #print("Medium Logo URL is None")
                    continue
                else:
                    player_info.append(medium_logo_url)
                    team_info.append(medium_logo_url)

                team_code = data[i].get("team", {}).get('teamCode')
                if team_code is None:
                    continue
                team_info.append(team_code)

            
                for stat in n["statistics"]:

                    if stat["name"] == "minutes_played_official":
                        minutes_played = stat.get("value")
                        if minutes_played is None:
                            #print("Minutes Played is None")
                            continue
                        else:
                            player_info.append(minutes_played)
            

                    if stat["name"] == "matches_appearance":
                        matches_appearance = stat.get("value")
                        if matches_appearance is None:
                            #print("Matches Appearance is None")
                            continue
                        else:
                            player_info.append(matches_appearance)
                

                    if stat["name"] == "goals":
                        goals = stat.get("value")
                        if goals is None:
                            #print("Goals is None")
                            continue
                        else:
                            player_info.append(goals)
                
            
                    if stat["name"] == "assists":
                        assists = stat.get("value")
                        if assists is None:
                            #print("Assists is None")
                            continue
                        else:
                            player_info.append(assists)
                
                    if stat["name"] == "distance_covered":
                        distance_covered = stat.get("value")
                        if distance_covered is None:
                            #print("Distance Covered is None")
                            continue
                        else:
                            player_info.append(distance_covered)
            
                    if stat["name"] == "top_speed":
                        top_speed = stat.get("value")
                        if top_speed is None:
                            #print("Top Speed is None")
                            continue
                        else:
                            player_info.append(top_speed)
        
                
                #print(player_info)
                self.player_df.loc[len(self.player_df)] = player_info
                self.team_df.loc[len(self.team_df)] = team_info
            except Exception as e:
                print(f"Error processing player at index {i}: {e}")
                continue

        return self.player_df, self.team_df
    
    # Method to clean the dataframes by removing duplicates
    def clean(self):
        self.player_df.drop_duplicates(inplace = True)
        self.team_df.drop_duplicates(inplace = True)

        self.player_df = self.player_df.reset_index(drop=True)
        self.team_df = self.team_df.reset_index(drop=True)

        return self.player_df, self.team_df



import React from "react";

const championsLeagueTeam = [
{
id: 1,
name: "Kylian Mbappé",
team: "Paris Saint-Germain",
position: "Forward",
image: "https://assets.api.psg.fr/media/players/mbappe.jpg",
},
{
id: 2,
name: "Jude Bellingham",
team: "Real Madrid",
position: "Midfielder",
image: "https://assets.realmadrid.com/media/players/bellingham.jpg",
},
{
id: 3,
name: "Erling Haaland",
team: "Manchester City",
position: "Forward",
image: "https://assets.mancity.com/media/players/haaland.jpg",
},
{
id: 4,
name: "Kevin De Bruyne",
team: "Manchester City",
position: "Midfielder",
image: "https://assets.mancity.com/media/players/debruyne.jpg",
},
{
id: 5,
name: "Thibaut Courtois",
team: "Real Madrid",
position: "Goalkeeper",
image: "https://assets.realmadrid.com/media/players/courtois.jpg",
},
];

function TeamDisplay() {
return (
<div style={{ padding: "30px", fontFamily: "Poppins, Arial, sans-serif" }}>
<h1
style={{
textAlign: "center",
color: "#004AAD",
marginBottom: "20px",
letterSpacing: "1px",
}}
>
My Champions League Fantasy Team ⚽
</h1>

<div
style={{
display: "flex",
flexWrap: "wrap",
gap: "20px",
justifyContent: "center",
}}
>
{championsLeagueTeam.map((player) => (
<div
key={player.id}
style={{
border: "1px solid #ddd",
borderRadius: "12px",
width: "220px",
backgroundColor: "#f9f9f9",
boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
overflow: "hidden",
transition: "transform 0.2s",
}}
onMouseEnter={(e) =>
(e.currentTarget.style.transform = "scale(1.03)")
}
onMouseLeave={(e) =>
(e.currentTarget.style.transform = "scale(1)")
}
>
{player.image && (
<img
src={player.image}
alt={player.name}
style={{
width: "100%",
height: "180px",
objectFit: "cover",
}}
/>
)}
<div style={{ padding: "10px", textAlign: "center" }}>
<h3 style={{ margin: "10px 0 5px 0", color: "#333" }}>
{player.name}
</h3>
<p style={{ margin: "0", color: "#555" }}>{player.team}</p>
<small style={{ color: "#777" }}>{player.position}</small>
</div>
</div>
))}
</div>
</div>
);
}

export default TeamDisplay;
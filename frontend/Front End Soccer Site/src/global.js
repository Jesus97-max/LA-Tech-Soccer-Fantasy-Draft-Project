// Counting the amount of rounds we have
export const roundCounter = 5;

// Declaring Athelete Class
export class Athlete {
  constructor(id, name, position, cost, club) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.cost = cost;
    this.club = club;
  }
}

// Declaring Player Class
export class Player {
  constructor(name, team = [], pointSpend, id) {
    this.name = name;
    this.team = team;
    this.pointSpend = pointSpend;
    this.id = id;
  }
}

// Declaring all Atheletes
const a0  = new Athlete('260000001','Erling Haaland','FORWARD','Manchester City',12, 0);
const a1  = new Athlete('260000002','Kevin De Bruyne','MIDFIELDER','Manchester City',15, 1);
const a2  = new Athlete('260000003','Rodri','MIDFIELDER','Manchester City', 7, 2);
const a3  = new Athlete('260000004','Phil Foden','MIDFIELDER','Manchester City',19, 3);
const a4  = new Athlete('260000005','Bukayo Saka','FORWARD','Arsenal FC',23, 4);
const a5  = new Athlete('260000006','Jude Bellingham','MIDFIELDER','Real Madrid C.F.', 9, 5);
const a6  = new Athlete('260000007','Vinícius Júnior','FORWARD','Real Madrid C.F.',14, 6);
const a7  = new Athlete('260000008','Lautaro Martínez','FORWARD','FC Internazionale Milano',17, 7);
const a8  = new Athlete('260000009','Khvicha Kvaratskhelia','MIDFIELDER','SSC Napoli',21, 8);
const a9  = new Athlete('260000010','Victor Osimhen','FORWARD','SSC Napoli', 8, 9);
const a10 = new Athlete('260000011','Rafael Leão','FORWARD','AC Milan',25,10);
const a11 = new Athlete('260000012','Bruno Fernandes','MIDFIELDER','Manchester United FC', 6,11);
const a12 = new Athlete('260000013','Marcus Rashford','FORWARD','Manchester United FC',13,12);
const a13 = new Athlete('260000014','Son Heung-min','FORWARD','Tottenham Hotspur FC',20,13);
const a14 = new Athlete('260000015','Alisson Becker','GOALKEEPER','Liverpool FC',11,14);
const a15 = new Athlete('260000016','Trent Alexander-Arnold','DEFENDER','Liverpool FC',16,15);
const a16 = new Athlete('260000017','Rúben Dias','DEFENDER','Manchester City',18,16);
const a17 = new Athlete('260000018','Jamal Musiala','MIDFIELDER','FC Bayern München',10,17);
const a18 = new Athlete('260000019','Florian Wirtz','MIDFIELDER','Bayer 04 Leverkusen',22,18);
const a19 = new Athlete('260000020','Pedri','MIDFIELDER','FC Barcelona',24,19);

export const athleteList = [
  a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19
];

// Delaring All Players
const p0 = new Player("Alice", [a1,a7,a8,a10,a19], 100, 0);
const p1 = new Player("Noah",  [a2,a5,a11,a14,a15], 200, 1);
const p2 = new Player("James", [a3,a9,a12,a18,a13], 300, 2);
const p3 = new Player(" ", [], 300, 3);

export const playerList = [p0,p1,p2,p3];

// Athletes that are already on a team
export const selected = new Set([a1,a7,a8,a10,a19,a2,a5,a11,a14,a15,a3,a9,a12,a18,a13]);
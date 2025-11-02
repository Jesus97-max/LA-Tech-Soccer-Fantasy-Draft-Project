// Counting the amount of rounds we have
export const roundCounter = 5;

// Declaring Athlete Class
export class Athlete {
  constructor(statOne, statTwo, statThree, statFour, pointCost, id) {
    this.statOne = statOne;
    this.statTwo = statTwo;
    this.statThree = statThree;
    this.statFour = statFour;
    this.pointCost = pointCost;
    this.id = id; 
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
const a0  = new Athlete('#','#','#','#',12, 0);
const a1  = new Athlete('#','#','#','#',15, 1);
const a2  = new Athlete('#','#','#','#', 7, 2);
const a3  = new Athlete('#','#','#','#',19, 3);
const a4  = new Athlete('#','#','#','#',23, 4);
const a5  = new Athlete('#','#','#','#', 9, 5);
const a6  = new Athlete('#','#','#','#',14, 6);
const a7  = new Athlete('#','#','#','#',17, 7);
const a8  = new Athlete('#','#','#','#',21, 8);
const a9  = new Athlete('#','#','#','#', 8, 9);
const a10 = new Athlete('#','#','#','#',25,10);
const a11 = new Athlete('#','#','#','#', 6,11);
const a12 = new Athlete('#','#','#','#',13,12);
const a13 = new Athlete('#','#','#','#',20,13);
const a14 = new Athlete('#','#','#','#',11,14);
const a15 = new Athlete('#','#','#','#',16,15);
const a16 = new Athlete('#','#','#','#',18,16);
const a17 = new Athlete('#','#','#','#',10,17);
const a18 = new Athlete('#','#','#','#',22,18);
const a19 = new Athlete('#','#','#','#',24,19);

export const athleteList = [
  a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19
];

// Delaring All Players
const p0 = new Player("Alice", [a1,a7,a8,a10,a19], 100, 0, false);
const p1 = new Player("Noah",  [a2,a5,a11,a14,a15], 200, 1, false);
const p2 = new Player("James", [a3,a9,a12,a18,a13], 300, 2, false);
const p3 = new Player(" ", [], 300, 3, false);

export const playerList = [p0,p1,p2,p3];

// Athletes that are already on a team
export const selected = new Set([a1,a7,a8,a10,a19,a2,a5,a11,a14,a15,a3,a9,a12,a18,a13]);

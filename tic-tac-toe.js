const winconditions = [[0,1,2], [3,4,5], [6,7,8] [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

// methode om winnaar vast te stellen:
// per winconditie controleren of binnen het gameboard de drie posities dezelfde waarde bevatten
// als het resultaat true is is er een winnaar. als het resultaat false is en de array is vol
// is het gelijkspel (tie).

function Gameboard() {
    const gameboard = new Array(9);
    this.placeMarker = function(Player, position) {
        console.log(this.gameboard);
        if (this.gameboard[position] !== null) {
            console.log('This position has been taken already.')
            return;
        }
        this.gameboard[position] = Player.marker;
    } 
}

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
}

console.log('How to play this game?');
console.log('First, create the first player using this command: const player1 = new Player("name", "marker")');
console.log('Second, create the second player using this command: const player2 = new Player("name", "marker")');
console.log('Where name and marker should be chosen by each player.')



// spelers mogen om beurten een vakje vullen
// speler X begint en daarna mag speler O
// Zodra de array groter is dan 4 (dus 5 entries)
// moet er gecontroleerd worden of er aan een win conditie is voldaan voor 1 van beide spelers
// dit gaat op de volgende methode:


// TODO

// UI
// input name for players
// button to start/restart the game
// display score
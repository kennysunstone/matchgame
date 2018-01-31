var unplacedCards = [];
var gameBoard = [];

for(var count = 1; count <= 8; count++) {
unplacedCards.push(count);
unplacedCards.push(count);
}
/*
Generates and returns an array of matching card values.
*/
while(unplacedCards.length > 0) {
var index = Math.floor(Math.random() * unplacedCards.length);
var card = unplacedCards[index];
gameBoard.push(card);
unplacedCards.splice(index,1);
}
console.log(gameBoard);
console.log(unplacedCards);

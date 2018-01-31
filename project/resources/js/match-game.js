var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
MatchGame.generateCardValues = function () {
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

};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};

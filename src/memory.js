var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = [];
  this.pairsClicked = 0;
  this.pairGuessed = 0;
};

//suffle works > keep this
MemoryGame.prototype.shuffleCards = function () {
  var i  = cards.length, j, temp;
  while (--i > 0) {
    j = Math.floor(Math.random() * (i+1));
    temp = cards[j];
    cards[j] = cards[i];
    cards[i] = temp;
  }
  return cards;
};




MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
}

MemoryGame.prototype.isFinished = function () {
};

//use to flip cards.

// function(){
//   $(card).children(".back").toggleClass("front flip" );
//   $(card).children(".front").toggleClass("front back");
//   flipCard()
// }
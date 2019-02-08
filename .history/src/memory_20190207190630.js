var MemoryGame = function (cards) {
  this.cards = cards;
  // this.pickedCards = pickedCards;
  // this.pairsClicked = pairsClicked;
  // this.pairGuessed = pairGuessed;
};

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

MemoryGame.prototype.shuffleCards();

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
}

MemoryGame.prototype.isFinished = function () {
};
var MemoryGame = function (cards) {
  this.cards = cards;
  this.pickedCards = pickedCards;
  this.pairsClicked = pairsClicked;
  this.pairGuessed = pairGuessed;
};

MemoryGame.prototype.shuffleCards = function () {
  var i  = this.length, j, temp;
  while (--i > 0) {
    j = Math.foloor(Math.random() * (i+1));
    temp = cards[j];
    cards[j] = cards[i];
    cards[i] = temp;
  }
};

MemoryGame.prototype.checkIfPair = function (firstCard, secondCard) {
}

MemoryGame.prototype.isFinished = function () {
};
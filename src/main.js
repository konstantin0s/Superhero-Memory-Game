var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.shuffleCards(cards).forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  $('.back').click(function () {
    // TODO: write some code here

  });

  //show clicked cards
  $('.card').click(function () {
    $.each($(this).children(),function(idx, value){
      $(value).toggleClass('back');
      $(value).toggleClass('front');
      setTimeout(() => {
        $(value).toggleClass('back');
        $(value).toggleClass('front');
      }, 1500);
    })
  });

  const cardz = document.querySelectorAll('.card');
  cardz.forEach(card => card.addEventListener('click', flipCard));


  // let score = document.querySelector('#pairs_guessed');
  // let clicked =  document.querySelector('#pairs_clicked');


  let score = 0;
  let clicked = 0;
  let win = 12;
  let lost = 24;

  if (score == win) {
    $("#pairs_guessed").text("You Won!!!");
  }
  if (clicked == lost) {
    $("#pairs_guessed").text("Game Over!!!");
  }

  let hasFlippedCard = false;
  let firstCard, secondCard;
  
  function flipCard() {
   this.classList.add('flip');
   if (!hasFlippedCard) {
     //first click;
     hasFlippedCard = true;
     firstCard = this;
   } else {
     //second click
     hasFlippedCard = false;
     secondCard = this;
     var element = document.getElementsByClassName("card");
     var dataset = element.dataset;
//indentify cards
checkForMatch();
   }
  
  }

  function checkForMatch() {
    if (firstCard.dataset.cardName === secondCard.dataset.cardName) {
      disableCards();
      score += 1;
      $("#pairs_guessed").text(score);
      $("#text").text('You have a pair :)');
      console.log(score);
      console.log(firstCard.dataset.cardName);
      console.log(secondCard.dataset.cardName);
    } else {
      //not a match
      clicked += 1;
      unflipCards();
      $("#pairs_clicked").text(clicked);
      console.log(clicked);
      
    }
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
  }
  
  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 1500);
  }




});
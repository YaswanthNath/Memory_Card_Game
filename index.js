
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
var scores =0;
let time = 30000;

//let timer = setTimeout(myFunction, time)

/*myFunction(){
  unflipCards();
  resetBoard();
}*/

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.id === secondCard.id;

  isMatch ?   disableCards() : unflipCards();
  
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    increment();
  
  resetBoard();
}

function increment(){
    ++scores;
    document.getElementById('score').innerHTML = "score :" +  scores ;
    
}

(function myFunction() {
  setInterval(alertFunc, time);
})();

function alertFunc() {
  alert("ur time is out");
  alert("Start the game again");
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));



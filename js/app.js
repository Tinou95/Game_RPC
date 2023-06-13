document.addEventListener("DOMContentLoaded", () => {

        //simple Rock paper scissors game

        //variables
        const game = document.querySelector('.game');
const player = document.querySelector('.player');
const computer = document.querySelector('.computer');
const winner = document.querySelector('.winner');
const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const reset = document.querySelector('.reset');
const winSound = new Audio('asset/B4.mp3');
const loseSound = new Audio('asset/B2.mp3');
const drawSound = new Audio('asset/B3.mp3');
let playerChoice = '';
let computerChoice = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let winnerScore = 5;
let winnerScoreNumber = 0;

//player choice
game.addEventListener('click', function(e) {
  if (e.target.classList.contains('player-choice')) {
    playerChoice = e.target.getAttribute('data-choice');
    player.innerHTML = `<img src="asset/${playerChoice}.png" alt="${playerChoice}">`;
    computerChoiceFunction();
    winnerFunction();
  }
});

//computer choice
function computerChoiceFunction() {
  let random = Math.random();
  if (random < 0.34) {
    computerChoice = 'rock';
  } else if (random <= 0.67) {
    computerChoice = 'paper';
  } else {
    computerChoice = 'scissors';
  }
  computer.innerHTML = `<img src="asset/${computerChoice}.png" alt="${computerChoice}">`;
}

//winner
function winnerFunction() {
  if (playerChoice == computerChoice) {
    winner.innerHTML = `<h2 class="draw">Egalité</h2>`;
    drawSound.play();
  } else if (playerChoice == 'rock' && computerChoice == 'paper') {
    winner.innerHTML = `<h2 class="lose">Tu as perdu</h2>`;
    computerScoreNumber++;
    computerScore.innerHTML = computerScoreNumber;
    winnerScoreNumber++;
  } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
    winner.innerHTML = `<h2 class="win">Tu as gagné</h2>`;
    winSound.play();
    playerScoreNumber++;
    playerScore.innerHTML = playerScoreNumber;
    winnerScoreNumber++;
  } else if (playerChoice == 'paper' && computerChoice == 'rock') {
    winner.innerHTML = `<h2 class="win">Tu as gagné</h2>`;
    winSound.play();
    playerScoreNumber++;
    playerScore.innerHTML = playerScoreNumber;
    winnerScoreNumber++;
  } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
    winner.innerHTML = `<h2 class="lose">Tu as perdu</h2>`;
    loseSound.play();
    computerScoreNumber++;
    computerScore.innerHTML = computerScoreNumber;
    winnerScoreNumber++;
  } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
    winner.innerHTML = `<h2 class="lose">Tu as perdu</h2>`;
    loseSound.play();
    computerScoreNumber++;
    computerScore.innerHTML = computerScoreNumber;
    winnerScoreNumber++;
  } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
    winner.innerHTML = `<h2 class="win">Tu as gagné</h2>`
    winSound.play();
    playerScoreNumber++;
    playerScore.innerHTML = playerScoreNumber;
    winnerScoreNumber++;
  }


};

//reset
reset.addEventListener('click', function() {
  playerChoice = '';
  computerChoice = '';
  playerScoreNumber = 0;
  computerScoreNumber = 0;
  winnerScoreNumber = 0;
  player.innerHTML = '';
  computer.innerHTML = '';
  winner.innerHTML = '';
  playerScore.innerHTML = playerScoreNumber;
  computerScore.innerHTML = computerScoreNumber;

});








  });
  
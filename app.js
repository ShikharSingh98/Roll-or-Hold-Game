const dice = document.querySelector('#dice');
const rollDiceButton = document.querySelector('#roll-dice-button');
const playerOneCurrentScore = document.querySelector('#player-one-current-score');
const playerTwoCurrentScore = document.querySelector('#player-two-current-score');

const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
let numberOnDice = 0;

let currentScore = 0;

let activePlayer = 'one';

function switchPlayer() {
  if (activePlayer === 'one') {
    activePlayer = 'two';
  } else {
    activePlayer = 'one';
  }
}

function displayCurrentScore() {
  if (numberOnDice === 1) {
    // Step 1: make the current score 0
    currentScore = 0;

    // Step 2: display the current score of active player
    document.querySelector(`#player-${activePlayer}-current-score`).textContent = currentScore;

    // Step 3: switch the player
    switchPlayer();
  } else {
    currentScore += numberOnDice;
    document.querySelector(`#player-${activePlayer}-current-score`).textContent = currentScore;
  }
}

rollDiceButton.addEventListener('click', function () {
  const number = Math.trunc(Math.random() * 6) + 1;
  numberOnDice = number;
  dice.className = `fas fa-dice-${numbers[number - 1]}`;
  displayCurrentScore();
});

const dice = document.querySelector('#dice');
const rollDiceButton = document.querySelector('#roll-dice-button');
const holdButton = document.querySelector('#hold-button');

const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
let numberOnDice = 0;

let totalScoreOne = 0;
let totalScoreTwo = 0;

let currentScore = 0;

let activePlayer = 'one';

function switchPlayer() {
  // Step 1: make the current score 0
  currentScore = 0;

  // Step 2: display the current score of active player
  document.querySelector(`#player-${activePlayer}-current-score`).textContent = currentScore;

  // Step 3: Remove the active class from current active player
  document.querySelector(`#player-${activePlayer}-card`).classList.remove('active');

  // Step 4: Change the active player
  if (activePlayer === 'one') {
    activePlayer = 'two';
  } else {
    activePlayer = 'one';
  }

  // Step 5: Add the active class to new active player
  document.querySelector(`#player-${activePlayer}-card`).classList.add('active');
}

function displayCurrentScore() {
  if (numberOnDice === 1) {
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

holdButton.addEventListener('click', function () {
  if (activePlayer === 'one') {
    totalScoreOne += currentScore;
    document.querySelector(`#player-${activePlayer}-score`).textContent = totalScoreOne;
  } else {
    totalScoreTwo += currentScore;
    document.querySelector(`#player-${activePlayer}-score`).textContent = totalScoreTwo;
  }
  switchPlayer();
});

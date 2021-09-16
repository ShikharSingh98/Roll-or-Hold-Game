const dice = document.querySelector('#dice');
const newGameButton = document.querySelector('#new-game-button');
const rollDiceButton = document.querySelector('#roll-dice-button');
const holdButton = document.querySelector('#hold-button');
const openModalButton = document.querySelector('#open-modal-button');
const closeModalButton = document.querySelector('#close-modal-button');
const modalContainer = document.querySelector('.modal-container');

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

function displayWinner(winner) {
  document.querySelector(`#player-${winner}-card`).classList.add('winner');
  document.querySelector(`#player-${winner}-tag`).textContent = '🏆';
  rollDiceButton.disabled = true;
  holdButton.disabled = true;
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

  if (totalScoreOne >= 50) {
    displayWinner('one');
  }
  if (totalScoreTwo >= 50) {
    displayWinner('two');
  }

  switchPlayer();
});

newGameButton.addEventListener('click', function () {
  // Resetting all the scores to zero
  currentScore = 0;
  totalScoreOne = 0;
  totalScoreTwo = 0;

  // Displaying the scores after resetting
  document.querySelector(`#player-one-score`).textContent = totalScoreOne;
  document.querySelector(`#player-two-score`).textContent = totalScoreTwo;
  document.querySelector(`#player-${activePlayer}-current-score`).textContent = currentScore;

  // Resetting the active player to one
  document.querySelector(`#player-${activePlayer}-card`).classList.remove('active');
  activePlayer = 'one';
  document.querySelector(`#player-${activePlayer}-card`).classList.add('active');

  // Resetting the dice
  dice.className = '';

  //Resetting the winning card back to default
  document.querySelector(`#player-one-card`).classList.remove('winner');
  document.querySelector(`#player-one-tag`).textContent = '';
  document.querySelector(`#player-two-card`).classList.remove('winner');
  document.querySelector(`#player-two-tag`).textContent = '';

  //Enabling the buttons
  rollDiceButton.disabled = false;
  holdButton.disabled = false;
});

openModalButton.addEventListener('click', function () {
  modalContainer.classList.add('show-modal');
});

closeModalButton.addEventListener('click', function () {
  modalContainer.classList.remove('show-modal');
});

modalContainer.addEventListener('click', function (event) {
  if (event.target === modalContainer) {
    modalContainer.classList.remove('show-modal');
  }
});

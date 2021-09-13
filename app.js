const dice = document.querySelector('#dice');
const rollDiceButton = document.querySelector('#roll-dice-button');

const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];
let numberOnDice = 0;

let currentScore = 0;

let activePlayer = 'one';

function switchPlayer() {
  //Remove the active class from current active player
  document.querySelector(`#player-${activePlayer}-card`).classList.remove('active');

  //Change the active player
  if (activePlayer === 'one') {
    activePlayer = 'two';
  } else {
    activePlayer = 'one';
  }

  //Add the active class to new active player
  document.querySelector(`#player-${activePlayer}-card`).classList.add('active');
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

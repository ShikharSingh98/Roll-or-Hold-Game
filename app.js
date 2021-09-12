const dice = document.querySelector('#dice');
const rollDiceButton = document.querySelector('#roll-dice-button');
const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];

rollDiceButton.addEventListener('click', function () {
  const number = Math.trunc(Math.random() * 6) + 1;
  dice.className = `fas fa-dice-${numbers[number - 1]}`;
});

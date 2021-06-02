'use strict';
let currentPlayer;
let currentScore;
let totalScorePlayer;

newGame();

document.querySelector('.btn--roll').addEventListener('click', function () {
  let dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.dice').classList.remove('hidden');
  let diceImage = document.querySelector('.dice');
  diceImage.src = `dice-${dice}.png`;
  if (dice != 1) {
    currentScore += dice;
    document.querySelector(`#current--${currentPlayer}`).textContent =
      currentScore;
  } else {
    changePlayer();
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  totalScorePlayer[currentPlayer] += currentScore;
  document.querySelector(`#score--${currentPlayer}`).textContent =
    totalScorePlayer[currentPlayer];
  if (document.querySelector(`#score--${currentPlayer}`).textContent >= 20) {
    document
      .querySelector(`.player--${currentPlayer}`)
      .classList.add('player--winner');
    document.querySelector('.btn--hold').classList.add('hidden');
    document.querySelector('.btn--roll').classList.add('hidden');
  } else changePlayer();
});

document.querySelector('.btn--new').addEventListener('click', newGame);

function changePlayer() {
  document.querySelector(`#current--${currentPlayer}`).textContent =
    currentScore = 0;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.toggle('player--active');
  currentPlayer = (currentPlayer + 1) % 2;
  document
    .querySelector(`.player--${currentPlayer}`)
    .classList.toggle('player--active');
}

function newGame() {
  currentPlayer = 0;
  currentScore = 0;
  totalScorePlayer = [0, 0];
  document.querySelector(`.player--1`).classList.remove('player--active');
  document.querySelector(`.player--0`).classList.add('player--active');

  document.querySelector('.dice').classList.add('hidden');

  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  document.querySelector('.btn--hold').classList.remove('hidden');
  document.querySelector('.btn--roll').classList.remove('hidden');

  for (let i = 0; i < 2; i++) {
    document.querySelector(`#score--${i}`).textContent = 0;
    document.querySelector(`#current--${i}`).textContent = 0;
  }
}

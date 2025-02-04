'use strict';

const player1 = document.querySelector('.player--0');
const score1 = document.querySelector('.score--0');
const player2 = document.querySelector('.player--1');
const score2 = document.querySelector('.score--1');
const dice = document.querySelector('.dice');

let btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
const allScores = [0, 0];
let activePlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
};


btnRoll.addEventListener('click', function () {
  if (playing) {
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    allScores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      allScores[activePlayer];

    if (allScores[activePlayer] >=20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player-winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

// New Game Start.
btnNew.addEventListener('click', function () {

  playing = true;
  currentScore = 0;
  player1.classList.remove('player-winner');
  player2.classList.remove('player-winner');
 dice.classList.add('hidden');
});

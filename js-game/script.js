'use strict';

// Game Start--------------------------------------------------------------------------------


let guessNumber = document.querySelector('.message').textContent;
const number = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
    
  let guess = document.querySelector('.guess').value;
  let scoreElement = document.querySelector('.score');
  document.querySelector('.number').textContent = guess;

  if (guess.length == 0) {
    document.querySelector('.message').textContent = '😏 No number found!';
  } else if (number < guess) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'You Gueses Hight Number😒';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You are lost the game!😒';
      document.querySelector('.score').textContent = score;
    }
  } else if (number > guess) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'You Gueses Low Number😒';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'You are lost the game!😒';
      document.querySelector('.score').textContent = score;
    }
  } else if (number == guess) {
    scoreElement.textContent = score;
    document.querySelector('.message').textContent = 'You Guese Right Number👌';
    document.querySelector('.body-class').classList.add('body-bg');
    document.querySelector('.score').textContent = score;
  }
});


// Again Start Button-----

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = guessNumber;
  document.querySelector('.body-class').classList.remove('body-bg');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = 20;
  score = 20;
  number;
});

// Game Over--------------------------------------------------------------------------------

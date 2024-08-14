'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').innerHTML = secretNumber;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').innerHTML = '⛔ No Number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '😀 Correct Number';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').innerHTML = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = '📈 Too High';
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost';
      document.querySelector('.score').innerHTML = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').innerHTML = '📉 Too Low';
      score--;
      document.querySelector('.score').innerHTML = score;
    } else {
      document.querySelector('.message').textContent = '💥You lost';
      document.querySelector('.score').innerHTML = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').innerHTML = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
});

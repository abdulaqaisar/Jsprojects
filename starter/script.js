'use strict';

let score = 20,
  flag = 0,
  number,
  highscore;
  
number = Math.trunc(Math.random() * 20 + 1);

const displaymessage= function(message){
document.querySelector('.message').textContent = message;
}
const displaynumber= function(num){
  document.querySelector('.number') = num;
  }
// console.log(number);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(typeof guess);
  console.log(score);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number Try Again !!!';
    displaymessage('No Number Try Again !!!');
    document.querySelector('body').style.backgroundColor = '#098288';
  } else if (guess == number && flag < 1) {
    score++;
    // document.querySelector('.message').textContent = 'Congratulations';
    displaymessage('Congratulations');
    // document.querySelector('.number').textContent = number;
    displaynumber(number);
    document.querySelector('.score').textContent = score;
    highscore = document.querySelector('.highscore').textContent;
    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
    }
    document.querySelector('body').style.backgroundColor = '#5AE23F';
    document.querySelector('.number').style.width = '30rem';
    // displaynumber.style.width('30rem');
    flag++;
  } else {
    if (guess != number) {
      if (score > 1) {
        // document.querySelector('.message').textContent =
        //   guess > number ? 'Number is Too High !!!' : 'Number is Too LOW !!!';
        displaymessage(guess > number ? 'Number is Too High !!!' : 'Number is Too LOW !!!');
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#07177A';
      } else {
        // document.querySelector('.message').textContent = '..YOU LOST GAME..';
        displaymessage('..YOU LOST GAME..');
        document.querySelector('.score').textContent = 0;
        document.querySelector('body').style.backgroundColor = '#D80000';
      }
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  flag--;
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displaymessage('Start guessing...');
  number = Math.trunc(Math.random() * 20 + 1);
  console.log(number);
  document.querySelector('body').style.backgroundColor = '#000000';
  // document.querySelector('.number').textContent = '?';
  displaynumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
});

// console.log(document.querySelector('.message').textContent);
// if (document.querySelector('.guess').value == '50') {
//   //   document.querySelector('.number').textContent = '50';
//   document.querySelector('.message').textContent = 'Correct Number !!!';
// }

//{    to merge array  and also don't allow repititions.
//     const Array1 = [1, 2, 2];
//     const Array2 = [11, 2, 2];
//     const Array3 = [13, 2, 2, 2];
//     const newset = new Set([...Array1, ...Array2, ...Array3]);
//     console.log(newset);    }

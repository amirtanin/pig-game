'use strict';
// get name
const namePlayer1 = prompt('Please enter the name of the first player');
const namePlayer2 = prompt('Please enter the name of the second player');
const namePlayerOne = document.querySelector('.namePlayerOne');
const namePlayerTwo = document.querySelector('.namePlayerTwo');
namePlayerOne.textContent = namePlayer1.toUpperCase();
namePlayerTwo.textContent = namePlayer2.toUpperCase();

let p1 = 0;
let p2 = 0;
const totalPlayer1 = document.querySelector('.totalPlayer1');
const totalPlayer2 = document.querySelector('.totalPlayer2');
const hold = document.querySelector('.hold');
const playerOne = document.querySelector('.playerOne');
const playerTwo = document.querySelector('.playerTwo');
const numCurrentP1 = document.querySelector('.numCurrentP1');
const numCurrentP2 = document.querySelector('.numCurrentP2');
const roll = document.querySelector('.roll');
const rollDice = document.querySelector('.rollDice');
const newGame = document.querySelector('.newGame');
const winner = document.querySelector('.winner');
const nameWinner = document.querySelector('.nameWinner');
playerOne.style.backgroundColor = 'rgb(138, 43, 226)';
playerTwo.style.backgroundColor = 'rgb(188, 138, 236)';
let randNumber = 0;

const rand = function () {
  randNumber = Math.trunc(Math.random() * 6 + 1);
  roll.src = `${randNumber}.png`;
};

rollDice.addEventListener('click', function () {
  if (playerOne.style.backgroundColor == 'rgb(138, 43, 226)') {
    rand();
    p1 += randNumber;
    numCurrentP1.textContent = p1;
    if (randNumber == 1) {
      p1 = 0;
      numCurrentP1.textContent = 0;
      playerOne.style.backgroundColor = 'rgb(188, 138, 236)';
      playerTwo.style.backgroundColor = 'rgb(138, 43, 226)';
    }
  } else if (playerTwo.style.backgroundColor == 'rgb(138, 43, 226)') {
    rand();
    p2 += randNumber;
    numCurrentP2.textContent = p2;
    if (randNumber == 1) {
      p2 = 0;
      numCurrentP2.textContent = 0;
      playerOne.style.backgroundColor = 'rgb(138, 43, 226)';
      playerTwo.style.backgroundColor = 'rgb(188, 138, 236)';
    }
  }
});

hold.addEventListener('click', function () {
  if (playerOne.style.backgroundColor == 'rgb(138, 43, 226)') {
    let nCP1 = Number(numCurrentP1.textContent);
    let tP1 = Number(totalPlayer1.textContent);
    let x1 = tP1 + nCP1;
    totalPlayer1.textContent = x1;
    playerTwo.style.backgroundColor = 'rgb(138, 43, 226)';
    playerOne.style.backgroundColor = 'rgb(188, 138, 236)';
    numCurrentP1.textContent = 0;
    p1 = 0;
    console.log(x1);
    if (x1 >= 100) {
      console.log('test');
      winner.classList.remove('hidden');
      nameWinner.textContent = `${namePlayer1} wins`.toUpperCase();
    }
  } else if (playerTwo.style.backgroundColor == 'rgb(138, 43, 226)') {
    let nCP2 = Number(numCurrentP2.textContent);
    let tP2 = Number(totalPlayer2.textContent);
    let x2 = tP2 + nCP2;
    totalPlayer2.textContent = x2;
    playerOne.style.backgroundColor = 'rgb(138, 43, 226)';
    playerTwo.style.backgroundColor = 'rgb(188, 138, 236)';
    numCurrentP2.textContent = 0;
    p2 = 0;
    if (x2 >= 100) {
      console.log('test');
      winner.classList.remove('hidden');
      nameWinner.textContent = `${namePlayer2} wins`.toUpperCase();
    }
  }
});
// new game action
newGame.addEventListener('click', function () {
  totalPlayer1.textContent = 0;
  totalPlayer2.textContent = 0;
  numCurrentP1.textContent = 0;
  numCurrentP2.textContent = 0;
  winner.classList.add('hidden');
});

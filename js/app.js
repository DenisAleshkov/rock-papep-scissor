'use strict';
let playerScore = 0;
let computerScore = 0;
const computerOptions = ['rock', 'paper', 'scissors'];
const playerHand = document.querySelector('.game-player-hand');
const computerHand = document.querySelector('.game-computer-hand');
const winner = document.querySelector('.title');

function removeAnimatione(){
	const hands = document.querySelectorAll('.hand-changed');
	hands.forEach(hand => {
		hand.addEventListener('animationend', function() {
			this.style.animation = '';
		})
	})
}

function changeHands(event){
	let index = Math.floor(Math.random() * Math.floor(3));// expected output: 0, 1 or 2
	let changeComputer = computerOptions[index];
	let changePlayer = event.target.dataset.change;
	//after Timeout the hands is changes of image
	setTimeout( () => { 
		playerHand.src = `./images/${changePlayer}.png`;
    	computerHand.src = `./images/${changeComputer}.png`;
    	compareHands(changePlayer, changeComputer);
	}, 2000);
	//add animation
    playerHand.style.animation = 'shakePlayer 2s ease';
    computerHand.style.animation = 'shakeComputer 2s ease';
    //remove animation
    removeAnimatione();
    //check of the hands
}
//click on the let's start and show the game
const buttonPlay = document.querySelector('.button-play');
buttonPlay.addEventListener('click',() => {
	document.querySelector('.game-start').classList.add('fadeOut');
	document.querySelector('.game-area').classList.add('fadeIn');
});


const buttonArea = document.querySelector('.game-button');
buttonArea.addEventListener('click', changeHands );

function updateScore(){
	const playerS = document.querySelector('.score-number-player');
	const computerS = document.querySelector('.score-number-computer');
	playerS.textContent = playerScore;
	computerS.textContent = computerScore; 
}

function compareHands(playerChoice, computerChoice){
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = 'It is a tie';
      return;
    }
	switch(playerChoice){
	//Cheack for Rock
    case "rock": 
		(computerChoice === "scissors") ? showWinner("Player Wins", playerScore++):
        showWinner("Computer Wins", computerScore++);break;
    //Check for Paper
    case "paper": 
     	(computerChoice === "scissors") ? showWinner("Computer Wins", computerScore++):
      	showWinner("Player Wins", playerScore++);break;
    //Check for Scissors
    case "scissors" : 
      	(computerChoice === "rock") ? showWinner("Computer Wins", computerScore++) :
       	showWinner("Player Wins", playerScore++);break;
    
  };
}
function showWinner(itemWins, itemScore){
	winner.textContent = itemWins;
    updateScore();
}
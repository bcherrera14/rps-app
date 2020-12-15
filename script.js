let gameOptions = {
	rock: '<i class="fas fa-hand-rock fa-3x" id="rock" ></i>',
	paper: ' <i class="fas fa-hand-paper fa-3x" id="paper" ></i>',
	scissors: '<i class="fas fa-hand-scissors fa-3x" id="scissors" ></i>'
};
let smallIcon = 'fa-2x';
let largeIcon = ' fa-3x';
let computerOptions = Object.keys(gameOptions);
let gameArea = document.getElementById('game-area');
let playerShowSelection = document.getElementById('player-show-selection');
let computerShowSelection = document.getElementById('computer-show-selection');

//Add click event to rps options
let playerOptions = document.getElementById('rps-icons');
playerOptions.addEventListener('click', userSelect);

let playerSelection = '';
let computerSelection = '';
//Hide play button at start
let playButton = document.getElementById('play-button');
playButton.style.visibility = 'hidden';

//Store user selection
function userSelect(e) {
	if (e.target.classList.contains('fas')) {
		playerSelection = e.target.id;
		playButton.style.visibility = 'visible';
		console.log(e.target);
		e.target.classList.remove(smallIcon);
		e.target.className += largeIcon;
	}
}

//Randomize computer selection
function computerSelect() {
	let randomIndex = Math.floor(Math.random() * 3);
	computerSelection = computerOptions[randomIndex];
	computerShowSelection.innerHTML = gameOptions[computerSelection];
	console.log(computerSelection);
	return computerSelection;
}

function playGame() {
	playerShowSelection.innerHTML = gameOptions[playerSelection];
	computerSelect();
	chooseWinner();
}

function chooseWinner() {
	setTimeout(function() {
		//Case Draw
		if (computerSelection === playerSelection) {
			alert('draw');
		} else if (computerSelection === 'rock') {
			//Computer selection is rock
			if (playerSelection === 'paper') {
				alert('You win!');
			} else {
				alert('Computer wins rock!');
			}
		} else if (computerSelection === 'paper') {
			//Computer Selects paper
			if (playerSelection === 'scissors') {
				alert('You win!');
			} else {
				alert('Computer wins with paper!');
			}
		} else if (computerSelection === 'scissors') {
			//Computer Selects scissors
			if (playerSelection === 'rock') {
				alert('You win!');
			} else {
				alert('Computer wins with scissors!');
			}
		}
	}, 500);
}

let gameOptions = {
	rock: '<i class="fas fa-hand-rock fa-3x" id="rock" ></i>',
	paper: ' <i class="fas fa-hand-paper fa-3x" id="paper" ></i>',
	scissors: '<i class="fas fa-hand-scissors fa-3x" id="scissors" ></i>'
};

//Score board elements
let score = {
	win: 0,
	loss: 0,
	draw: 0
};
let wins = document.getElementById('win').firstElementChild;
wins.innerHTML = score.win;
let losses = document.getElementById('loss').firstElementChild;
losses.innerHTML = score.loss;
let draws = document.getElementById('draw').firstElementChild;
draws.innerHTML = score.draw;
let winMessage = 'You Win!';
let lossMessage = 'Computer Wins!';
let drawMessage = "It's a Draw!";
let gameResult = document.getElementById('result');
//gameResult.style.visibility = 'hidden';
let scoreTable = document.getElementById('score-board');
scoreTable.style.visibility = 'hidden';

let smallIcon = 'fa-2x';
let largeIcon = 'fa-3x';
let computerOptions = Object.keys(gameOptions);
//let gameArea = document.getElementById('game-area');
let playerShowSelection = document.getElementById('player-show-selection');
let computerShowSelection = document.getElementById('computer-show-selection');

//Add click event to rps options
let playerOptions = document.getElementById('rps-icons');
playerOptions.addEventListener('click', userSelect);
let handRock = document.getElementById('rock');
let handPaper = document.getElementById('paper');
let handScissors = document.getElementById('scissors');

let playerSelection = '';
let computerSelection = '';
//Hide play button at start
let playButton = document.getElementById('play-button');
playButton.style.visibility = 'hidden';
let replayButton = document.getElementById('replay-button');
replayButton.style.display = 'none';
//Hide vs
// let versus = document.getElementsByClassName('played-icons')[0].children[1];
// //console.log(versus);
// versus.style.visibility = 'hidden';
let gameArea = document.getElementById('game-area');
gameArea.style.visibility = 'hidden';

//Store user selection
function userSelect(e) {
	if (e.target.classList.contains('fas')) {
		playerSelection = e.target.id;
		playButton.style.visibility = 'visible';
		playButton.style.display = 'inline';
		handleIconSize();
		e.target.classList.remove(smallIcon);
		e.target.className += ' ' + largeIcon;
	}
}

function handleIconSize() {
	if (playerSelection === 'rock') {
		if (handPaper.classList.contains(largeIcon)) {
			handPaper.classList.remove(largeIcon);
			handPaper.className += ' ' + smallIcon;
		} else if (handScissors.classList.contains(largeIcon)) {
			handScissors.classList.remove(largeIcon);
			handScissors.className += ' ' + smallIcon;
		}
	} else if (playerSelection === 'paper') {
		if (handRock.classList.contains(largeIcon)) {
			handRock.classList.remove(largeIcon);
			handRock.className += ' ' + smallIcon;
		} else if (handScissors.classList.contains(largeIcon)) {
			handScissors.classList.remove(largeIcon);
			handScissors.className += ' ' + smallIcon;
		}
	} else if (playerSelection === 'scissors') {
		if (handRock.classList.contains(largeIcon)) {
			handRock.classList.remove(largeIcon);
			handRock.className += ' ' + smallIcon;
		} else if (handPaper.classList.contains(largeIcon)) {
			handPaper.classList.remove(largeIcon);
			handPaper.className += ' ' + smallIcon;
		}
	}
}

//Randomize computer selection
function computerSelect() {
	let randomIndex = Math.floor(Math.random() * 3);
	computerSelection = computerOptions[randomIndex];
	computerShowSelection.innerHTML = gameOptions[computerSelection];
	console.log(computerSelection);
	//return computerSelection;
}

function playGame() {
	gameArea.style.visibility = 'visible';
	playerShowSelection.innerHTML = gameOptions[playerSelection];
	//versus.style.visibility = 'visible';
	scoreTable.style.visibility = 'visible';
	computerSelect();
	chooseWinner();
	replayButton.style.display = 'inline';
	playButton.style.display = 'none';
	playerOptions.removeEventListener('click', userSelect);
}

function chooseWinner() {
	if (computerSelection === playerSelection) {
		//alert('draw');
		score.draw += 1;
		//gameResult.style.visibility = 'visible';
		gameResult.innerHTML = drawMessage;
		console.log(score);
	} else if (computerSelection === 'rock') {
		//Computer selection is rock
		if (playerSelection === 'paper') {
			//alert('You win!');
			score.win += 1;
			//gameResult.style.visibility = 'visible';
			gameResult.innerHTML = winMessage;
			console.log(score);
		} else {
			//alert('Computer wins with rock!');
			score.loss += 1;
			//gameResult.style.visibility = 'visible';
			gameResult.innerHTML = lossMessage;
			console.log(score);
		}
	} else if (computerSelection === 'paper') {
		//Computer Selects paper
		if (playerSelection === 'scissors') {
			//alert('You win!');
			score.win += 1;
			//gameResult.style.visibility = 'visible';
			gameResult.innerHTML = winMessage;
			console.log(score);
		} else {
			//alert('Computer wins with paper!');
			score.loss += 1;
			//gameResult.style.visibility = 'visible';
			gameResult.innerHTML = lossMessage;
			console.log(score);
		}
	} else if (computerSelection === 'scissors') {
		//Computer Selects scissors
		if (playerSelection === 'rock') {
			//alert('You win!');
			score.win += 1;
			//gameResult.style.visibility = 'visible';
			gameResult.innerHTML = winMessage;
			console.log(score);
		} else {
			//alert('Computer wins with scissors!');
			score.loss += 1;
			//gameResult.style.visibility = 'visible';
			gameResult.innerHTML = lossMessage;
			console.log(score);
		}
	}
	updateScoreBoard();
	//resetGame();
}

function updateScoreBoard() {
	wins.innerHTML = score.win;
	losses.innerHTML = score.loss;
	draws.innerHTML = score.draw;
}

function replayGame() {
	playButton.style.visibility = 'hidden';
	playButton.style.display = 'inline';
	gameArea.style.visibility = 'hidden';
	//versus.style.visibility = 'hidden';
	//gameResult.style.visibility = 'hidden';
	replayButton.style.display = 'none';
	//playerShowSelection.innerHTML = '';
	//computerShowSelection.innerHTML = '';
	playerOptions.addEventListener('click', userSelect);
	if (handRock.classList.contains(largeIcon)) {
		handRock.classList.remove(largeIcon);
		handRock.className += ' ' + smallIcon;
	} else if (handPaper.classList.contains(largeIcon)) {
		handPaper.classList.remove(largeIcon);
		handPaper.className += ' ' + smallIcon;
	} else if (handScissors.classList.contains(largeIcon)) {
		handScissors.classList.remove(largeIcon);
		handScissors.className += ' ' + smallIcon;
	}
}

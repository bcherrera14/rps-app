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
let scoreTable = document.getElementById('score-board');
scoreTable.style.visibility = 'hidden';

let smallIcon = 'fa-2x';
let largeIcon = 'fa-3x';
let computerOptions = Object.keys(gameOptions);
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
}

function playGame() {
	playerOptions.className = 'noHover';
	setTimeout(function() {
		gameArea.style.visibility = 'visible';
		playerShowSelection.innerHTML = gameOptions[playerSelection];
		scoreTable.style.visibility = 'visible';
		computerSelect();
		chooseWinner();
		replayButton.style.display = 'inline';
		playButton.style.display = 'none';
		playerOptions.removeEventListener('click', userSelect);
	}, 500);
}

function chooseWinner() {
	if (computerSelection === playerSelection) {
		score.draw += 1;
		gameResult.innerHTML = drawMessage;
	} else if (computerSelection === 'rock') {
		//Computer selection is rock
		if (playerSelection === 'paper') {
			score.win += 1;
			gameResult.innerHTML = winMessage;
		} else {
			score.loss += 1;
			gameResult.innerHTML = lossMessage;
		}
	} else if (computerSelection === 'paper') {
		//Computer Selects paper
		if (playerSelection === 'scissors') {
			score.win += 1;
			gameResult.innerHTML = winMessage;
		} else {
			score.loss += 1;
			gameResult.innerHTML = lossMessage;
		}
	} else if (computerSelection === 'scissors') {
		//Computer Selects scissors
		if (playerSelection === 'rock') {
			score.win += 1;
			gameResult.innerHTML = winMessage;
		} else {
			score.loss += 1;
			gameResult.innerHTML = lossMessage;
		}
	}
	updateScoreBoard();
}

function updateScoreBoard() {
	wins.innerHTML = score.win;
	losses.innerHTML = score.loss;
	draws.innerHTML = score.draw;
}

function replayGame() {
	playerOptions.className = '';
	playButton.style.visibility = 'hidden';
	playButton.style.display = 'inline';
	gameArea.style.visibility = 'hidden';
	replayButton.style.display = 'none';
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

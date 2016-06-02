// Tic Tac Toe game
// designed to be view agnostic

var GAME_SIZE = 9;
var squares = [];
var currentPlayer;
var player1;
var player2;
var turn;
var messages = "(try using your keyboard -- tab and return)";
var gameOverWinMsg = " Wins -- Game Over";
var gameOverDrawMsg = "Draw -- Game Over";

var playerWins = function () {
	// brute force
	if ((squares[0] === currentPlayer.id &&
		squares[1] === currentPlayer.id &&
		squares[2] === currentPlayer.id) ||
		(squares[3] === currentPlayer.id &&
			squares[4] === currentPlayer.id &&
			squares[5] === currentPlayer.id) ||
		(squares[6] === currentPlayer.id &&
			squares[7] === currentPlayer.id &&
			squares[8] === currentPlayer.id)
		) {
		// horizontal rows
		return true;
	} else if ((squares[0] === currentPlayer.id &&
		squares[3] === currentPlayer.id &&
		squares[6] === currentPlayer.id) ||
		(squares[1] === currentPlayer.id &&
			squares[4] === currentPlayer.id &&
			squares[7] === currentPlayer.id) ||
		(squares[2] === currentPlayer.id &&
			squares[5] === currentPlayer.id &&
			squares[8] === currentPlayer.id)
		) {
		// vertical rows
		return true;
	} else if ((squares[0] === currentPlayer.id &&
		squares[4] === currentPlayer.id &&
		squares[8] === currentPlayer.id) ||
		(squares[2] === currentPlayer.id &&
			squares[4] === currentPlayer.id &&
			squares[6] === currentPlayer.id)
		) {
		// diagonals
		return true;
	}
};

var isGameOver = function () {
	console.log("turn in isGameOver", turn);
	if (playerWins()) {

		messages = currentPlayer.name + gameOverWinMsg;
		return true;
	} else if (turn === GAME_SIZE) {
		// filled up board with no win
		messages = gameOverDrawMsg;
		return true;
	} 
	// game is not over
	return false;
};

// make a move
var makeMove = function (squareId) {
	// only able to click on available squares
	// update internal squares
	squares[squareId] = currentPlayer.id;
	turn++;
	console.log("makeMoveDOM", turn);

	// check for game over
	if (isGameOver()) {
		// isGameOver will update messages itself
		return false;
	}

	// advance player
	if (currentPlayer === player1) {
		currentPlayer = player2;
	} else {
		currentPlayer = player1;
	}

	return true;
};

// initialize board squares to null
var setUpBoard = function () {
	console.log("setUpBoard");
	for (var i = 0; i < GAME_SIZE; i++) {
		squares[i] = null;
	}
};

var setUpPlayers = function () {
	console.log("setUpPlayers");
	player1 = {
		name: "Player One",
		id: 1,
		moveClass: "player1"
	}

	player2 = {
		name: "Player Two",
		id: 2,
		moveClass: "player2"
	}

};

var setUpGameState = function () {
	console.log("setUpGameState");
	currentPlayer = player1;
	turn = 0;
};

var startNewGame = function () {
	console.log("startNewGame");
	setUpGameState();
};

// clear game state 
// reset
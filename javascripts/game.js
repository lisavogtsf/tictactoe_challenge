var GAME_SIZE = 9;
var squares = [];
var currentPlayer;
var player1;
var player2;

document.addEventListener('DOMContentLoaded', function (){

	// make a move
	var makeMove = function (squareId) {
		squares[squareId] = currentPlayer.id;
		console.log("makeMove", squareId);
		console.log(squares);

		// advance player
		if (currentPlayer === player1) {
			currentPlayer = player2;
		} else {
			currentPlayer = player1;
		}

		return true;
	}

	var makeDOMMove = function (squareId) {
		var element = document.querySelector(".square" + squareId);
		var classes = element.classList;
		classes.add("played");
		classes.add(currentPlayer.moveClass);
	}

	// initialize board squares to null
	var setUpBoard = function () {
		for (var i = 0; i < GAME_SIZE; i++) {
			squares[i] = null;
		}
	}

	var setUpDOMBoard = function () {
		// get board dom elements
		var square;
		var squareClasses;
		var squareId;
		var clickedSquareId;
		var squareElement;

		var clickOnSquare = function (e) {
				// when elements are clicked on, pass the square information on
				squareClasses = e.target.classList.value;
				squareElement = e.target;
				clickedSquareId = squareClasses[squareClasses.search(/[0-9]/)];

				// makeMove in logic then in view
				if (makeMove(clickedSquareId)) {
					console.log("squareElement ", squareElement);
					// remove event listener once that square has been played
					squareElement.removeEventListener("click", clickOnSquare);
					makeDOMMove(clickedSquareId);
				}
			};

		// put event listeners on board DOM elements
		for (var i = 0; i < GAME_SIZE; i++) {
			squareId = '.square' + i;
			square = document.querySelector(squareId);
			square.addEventListener('click', clickOnSquare);
		}
	}

	var setUpPlayers = function () {
		
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

		currentPlayer = player1;
	}

	var startNewGame = function () {

		setUpPlayers();

		setUpBoard();
		setUpDOMBoard();

	};

	// listen for start
	var startButton = document.querySelector('#startNewGame');
	startButton.addEventListener('click', function () {
		startNewGame();
	});




});
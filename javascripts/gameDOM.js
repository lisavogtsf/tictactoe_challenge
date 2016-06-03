/*
 * A game of Tic Tac Toe
 *   -- Lisa Vogt, http://lisavogtsf.github.io/
 * the game is ready to run as soon as the page loads
 * turns alternate between players as they click on squares
 * the game ends with three in a row or all squares filled
 */

document.addEventListener('DOMContentLoaded', function (){

	var updateMessagesDOM = function () {
		if (messages) {
			var element = document.querySelector('#messages h2');
			element.textContent = messages;
		}
	};

	var makeMoveDOM = function (squareId) {
		// update DOM element as played
		var element = document.querySelector(".square" + squareId);
		var classes = element.classList;
		classes.add("played");
		classes.add(currentPlayer.moveClass);

		// remove event listener once that square has been played
		var squareElement = document.querySelector('.square' + squareId);
		squareElement.removeEventListener("click", clickOnSquare);

		// if game is over
		if (!makeMove(squareId)) {
			// error or game over
			updateMessagesDOM();
			// need to visaully suspend the game
			var gameStage = document.querySelector('#game-stage');
			gameStage.classList.toggle('game-off');
			// remove event listeners
			for (var i = 0; i < GAME_SIZE; i++) {
				var squareId = '.square' + i;
				var square = document.querySelector(squareId);
				square.removeEventListener('click', clickOnSquare);
			}
		}
	};

	// listener function to attach to each square 
	// suring board setup
	var clickOnSquare = function (e) {
		var squareClasses;
		var clickedSquareId;
		// when elements are clicked on, pass the square information on
		squareClasses = e.target.classList.value;
		clickedSquareId = squareClasses[squareClasses.search(/[0-9]/)];

		makeMoveDOM(clickedSquareId);
	};

	// listener function to reload game
	var reloadGameDOM = function (e) {
		startNewGameDOM();
	};

	var setUpBoardDOM = function () {
		// call game logic
		setUpBoard();

		// get board dom elements
		var square;
		var squareId;
		var gameStage;

		// put event listeners on board DOM elements
		for (var i = 0; i < GAME_SIZE; i++) {
			squareId = '.square' + i;
			square = document.querySelector(squareId);
			square.addEventListener('click', clickOnSquare);
			square.classList.remove('played');
			square.classList.remove('player1');
			square.classList.remove('player2');
		}

		// visually indicate game has started
		gameStage = document.querySelector('#game-stage');
		gameStage.classList.toggle('game-off');
	};

	// stub as we're doing nothing in DOM
	// on player setup
	var setUpPlayersDOM = function () {
		setUpPlayers();
	};

	var startNewGameDOM = function () {
		updateMessagesDOM();
		setUpPlayersDOM();
		setUpBoardDOM();
		startNewGame();

	};

	// new game starts once DOM content has loaded
	startNewGameDOM();
	
});
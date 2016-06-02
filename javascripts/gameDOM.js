

document.addEventListener('DOMContentLoaded', function (){

	var updateMessagesDOM = function () {
		console.log("updateMessagesDOM", messages);
		if (messages) {
			var element = document.querySelector('#messages h2');
			console.log("element", element);
			element.textContent = messages;
		}
	};

	var makeMoveDOM = function (squareId) {
		console.log("makeMoveDOM");

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
			// need to suspend the game
		}
	};

	// listener function to attach to each square 
	// suring board setup
	var clickOnSquare = function (e) {
		// when elements are clicked on, pass the square information on
		squareClasses = e.target.classList.value;
		clickedSquareId = squareClasses[squareClasses.search(/[0-9]/)];

		makeMoveDOM(clickedSquareId);
	};

	var setUpBoardDOM = function () {
		// call game logic
		setUpBoard();

		// get board dom elements
		var square;
		var squareClasses;
		var squareId;
		var clickedSquareId;

		// put event listeners on board DOM elements
		for (var i = 0; i < GAME_SIZE; i++) {
			squareId = '.square' + i;
			square = document.querySelector(squareId);
			square.addEventListener('click', clickOnSquare);
		}
	};

	// stub as we're doing nothing in DOM
	// on player setup
	var setUpPlayersDOM = function () {
		setUpPlayers();
	};

	var startNewGameDOM = function () {
		console.log("startNewGameDOM");
		setUpPlayersDOM();
		setUpBoardDOM();
		startNewGame();

	};

	// new game starts once DOM content has loaded
	startNewGameDOM();

	
});
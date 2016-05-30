var express = require('express');
var ejs = require('ejs');
// var bodyParser = require('body-parser');
var app = express();

// use body-parser 
// app.use(bodyParser.urlencoded({extended: false}));

// set up view engine
app.set('view engine', 'ejs');

// serve static content
app.use(express.static(__dirname + '/public'));

// set up base route
app.get('/', function (req, res){
	
	res.render('index');
});


// 'tictactoe @otherplayer' route to start the game with other player
	// is this coming from a valid account?
	// is any game currently running?

	// start logic for a game between @user (info in headers?) and @otherplayer
	// set both scores to 0
	// decide who plays first

	// redirect to show


// 'show' shows the current game board (starting the game will redirect to this)
	// any player can do this
	// is there a game currently running?

	// displays the current state of the board
	// displays the two player user names
	// displays scores
	// displays whose turn it is

// 'go #' make a move in space #
	// is this coming from a valid account?
	// is this a valid move

	// place either X or O in space, changes board state

	// checks for game over -- win/loss/tie
		// are any playable spots left?
		// any three in a row created by last move?
	
	// advance player


// 'quit' end game 
	// is this coming from a valid account?
	// clears out game



// keeps the app listening
app.listen((process.env.PORT || 3000), function () {
	console.log("listening at http://localhost:3000");  
});

module.exports = app;
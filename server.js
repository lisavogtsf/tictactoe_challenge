var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// set up view engine
app.set('view engine', 'ejs');

// use body-parser 
app.use(bodyParser.urlencoded({extended: false}));

// set up base route
app.get('/', function (req, res){
	
	console.log("Request headers: *******************************\n", req.headers);
	console.log("request body: ", req.body);

	res.send("<h1>do you want to play a game?</h1><br><h2>>_</h2>");
});

// set up route to handle parameters
app.get('/:name?', function (req, res){
	console.log("Request headers: *******************************\n", req.headers);
	console.log("Request params: *******************************\n", req.params);
	console.log("request body: ", req.body);
	var headerString = "";
	var paramString = "";

	for (var key in req.headers) {
		headerString += "----" + key + ": " + req.headers[key] + "<br>";
	}

	for (key in req.params) {
		paramString += "----" + key + ": " + req.params[key] + "<br>";
	}

	res.send("sending this right back to Slack, having logged headers, <br>" + headerString + " and params, <br>" + paramString);
});

app.post('/', function(req, res){
	console.log("POST     POST     POST     POST");
	console.log("Request headers: *******************************\n", req.headers);
	console.log("Request params: *******************************\n", req.params);
	console.log("request body: ", req.body);
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
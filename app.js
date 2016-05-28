var express = require('express');
var app = express();

// variables for reuse
var pageTitle = "";

// set up view engine
app.set('view engine', 'ejs');


// set up base route
app.get('/', function (req, res){
	// res.send("do you want to play a game?");
	pageTitle = "TIC TAC TOE";
	res.render('index', {pageTitle: pageTitle});
});

app.get('/tack', function (req, res){
	res.send("do you want to play a game?");
	pageTitle = "TIC TAC TOE";
	res.render('index', {pageTitle: pageTitle});
});

// keeps the app listening
app.listen((process.env.PORT || 3000), function () {
	console.log("listening at http://localhost:3000");  
});

module.exports = app;
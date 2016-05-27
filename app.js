var express = require('express');
var app = express();

// variables for reuse
var pageTitle = "";

// set up view engine
app.set('view engine', 'ejs');

// // allow access to local stylesheet
// app.use(express.static(__dirname + '/public'));

// set up base route
app.get('/', function (req, res){
	// res.send("do you want to play a game?");
	pageTitle = "TIC TAC TOE";
	res.render('index', {pageTitle: pageTitle});
});


app.listen((process.env.PORT || 3000), function () {
	console.log("We only care about port 3000. How does that make the other ports feel?");  
});

module.exports = app;
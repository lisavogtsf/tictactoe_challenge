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

// keeps the app listening
app.listen((process.env.PORT || 3000), function () {
	console.log("listening at http://localhost:3000");  
});

module.exports = app;
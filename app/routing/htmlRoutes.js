
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//home page is loaded by default

module.exports = function (app) {
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
	//so glad we covered router!
	app.get('/survey', function (req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

};

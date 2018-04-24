var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//Requiring our routes
var htmlRoute = require('./app/routing/htmlRoutes');
var apiRoute = require('./app/routing/apiRoutes');
var app = express();
var PORT = process.env.PORT || 3000;
//Handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//homeRoute
app.use('/', htmlRoute);
//apiRoute
app.use('/api', apiRoute);
app.listen(PORT, function () {
	console.log("Server is listening on: http://localhost:%s", PORT);
});
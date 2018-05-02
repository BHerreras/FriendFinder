var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//Requiring our routes
require('./app/routing/htmlRoutes');
require('./app/routing/apiRoutes');
var app = express();
var PORT = process.env.PORT || 3000;
//Handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(PORT, function () {
	console.log("Server is listening on: http://localhost:%s", PORT);
});
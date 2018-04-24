
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var router = express.Router();
//home page is loaded by default
router.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/home.html'));
});
//so glad we covered router!
router.get('/survey', function (req, res) {
	res.sendFile(path.join(__dirname, '../public/survey.html'));
});

module.exports = router;
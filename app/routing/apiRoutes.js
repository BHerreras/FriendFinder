var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require('../data/friends.js');
var router = express.Router();
//this get prints out my array of friends
router.get('/friends', function (req, res) {
	return res.json(friends);
});

router.post('/friends', function (req, res) {
	var newFriend = req.body;
	console.log(newFriend);

	var newScores = newFriend.scores;
	var diffArray = [];
	var matchIndex = 0;

	for (var i = 0; i < friends.length; ++i) {
		var scoreDiff = 0;
		for (var j = 0; j < newScores.length; ++j) {
			scoreDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(newScores[j]));
		}
		diffArray.push(scoreDiff);
	}

	for (var i = 0; i < diffArray.length; ++i) {
		if (diffArray[i] <= diffArray[matchIndex]) {
			matchIndex = i;
		}
	}

	console.log(friends[matchIndex]);
	res.json(friends[matchIndex]);

	friends.push(newFriend);
});

module.exports = router;
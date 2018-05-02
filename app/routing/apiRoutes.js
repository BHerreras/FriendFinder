var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friends = require('../data/friends.js');
var router = express.Router();

module.exports = function (app) {
	//this get prints out my array of friends
	app.get('/api/friends', function (req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function (req, res) {
		var bestFriend = {
			name: "",
			photo: "",

		};
		console.log(bestFriend);

		var userData = req.body;
		var score = userData.scores;
		var difference;

		// Here we loop through all the friend possibilities in the database.
		for (var i = 0; i < friends.length; i++) {
			var currentFriend = friends[i];
			difference = 0;

			console.log(currentFriend.name);

			// We then loop through all the scores of each friend
			for (var j = 0; j < currentFriend.scores.length; j++) {
				var currentFriendScore = currentFriend.scores[j];
				var currentUserScore = score[j];

				// We calculate the difference between the scores and sum them into the totalDifference
				difference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
			}


			if (difference <= bestFriend.friendDifference) {

				bestFriend.name = currentFriend.name;
				bestFriend.photo = currentFriend.photo;
				bestFriend.friendDifference = difference;
			}
		}


		friends.push(userData);

		res.json(bestFriend);
	});



};

module.exports = router;
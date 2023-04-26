const mongoose = require("mongoose");
const Question = require("./../models/question");
const User = require("./../models/user.js");
const Game = require("./../models/game");
const Hint = require("./../models/hint");

exports.index = (req, res) => {
	if (req.isAuthenticated()) {
		res.redirect("/game");
	} else {
		var time = new Date();
		Game.findOne({ title: process.env.GAME_TITLE }, function (err, result) {
			if (err) {
				res.send("Error in fetching game");
			} else {
				message = "None";
				var time_to_start = result.startTime - time;
				console.log(time_to_start);
				res.render("index", {
					message: message,
					time_to_start: time_to_start
				});
			}
		});
	}
};
exports.game = (req, res) => {
	var time = new Date();
	Game.findOne({ title: process.env.GAME_TITLE }, function (err, result) {
		if (err) {
			res.send("Error in fetching game");
		} else {
			if (req.user.submitted == true) {
				message = "You have already submitted. Please check your rank in the leaderboard";
				req.logout();
				var time_to_start = result.startTime - time;
				res.render("index", {
					message: message,
					time_to_start: time_to_start
				});
			}
			else if (req.user.level == process.env.MAX_LEVEL) {
				message = "Well Done! You have solved all levels. Please check your rank in the leaderboard";
				var time_to_start = result.startTime - time;
				console.log(time_to_start);
				res.render("index", {
					message: message,
					time_to_start: time_to_start
				});
			} else {
				message = "None";
				var remaining_time = result.endTime - time;
				res.render("game", {
					user: req.user,
					message: message,
					remaining_time: remaining_time
				});
			}
		}
	})
}
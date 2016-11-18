console.log('user controller');
var mongoose = require('mongoose');
var User = mongoose.model('Users');

function userController(){
		this.create= function(req, res) {
			var newUser = new User(req.body);
			newUser.save(function(err, data) {
				if(err)
					console.log("user 10", err)
				else
					res.json(data)
			})
		},
		this.read= function(req, res) {
			User.find({}, function(err, data) {
				if(err)
					console.log("user 19", err)
				else
					res.json(data)
			})
		},
		this.readOne= function(req, res) {
			// console.log(req.params.id)
			// User.find({ _id: req.params.id }, function(err, data) {
			// 	if(err)
			// 		console.log("user 28", err);
			// 	else
			// 		res.json(data);
			// })
		},

		this.updateTopics=function(req, res) {
			console.log(req.body.topic);
			User.findByIdAndUpdate(
				req.params.id,
				{$set: {topics: req.body.topics}},
				{new : true},
				function(err, data){
					if(err)
						console.log("user 42", err)
					else
						res.json(data);
				}
			)
		},

		this.updatePosts= function(req, res) {
			User.findByIdAndUpdate(
				req.params.id,
				{$set: {posts: req.body.posts}},
				{new : true},
				function(err, data) {
					if(err)
						console.log("user 56", err);
					else
						res.json(data);
				})
		},

		this.updateComments= function(req, res) {
			User.findByIdAndUpdate(
				req.params.id,
				{$set: {comments: req.body.comments}},
				{new : true},
				function(err, data) {
					if(err)
						console.log("user 69", err);
					else
						res.json(data);
				})
		}
	}
module.exports = new userController();

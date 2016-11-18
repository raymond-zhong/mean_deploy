console.log('topic controller');
var mongoose = require('mongoose');
var Topic = mongoose.model('Topics');

function topicController() {
		this.create= function(req, res) {
			var newTopic = new Topic(req.body);
			newTopic.save(function(err, info) {
				if(err)
					console.log("topic 10", err)
				else {
					Topic.find({}, function(err, data) {
						if(err)
							console.log("topic 14", err);
						else
							var data = {data: data, info: info}
							res.json(data);
					})
				}
			})
		},

		this.read= function(req, res) {
			Topic.find({}, function(err, data) {
				if(err)
					console.log("topic 25", err)
				else
					res.json(data)
			})
		},

		this.getOne= function(req, res) {
			// console.log(req.params.id)
			// 	console.log('hi')
			// Topic.find({ _id: req.params.id}, function(err, data) {
			// 	if(err)
			// 		console.log("topic 34", err)
			// 	else
			// 		res.json(data);
			// })
		},

		this.update= function(req, res) {
			Topic.findByIdAndUpdate(
				req.params.id,
				{$set: {posts: req.body.posts}},
				{new : true},
				function(err, data){
					if(err)
						console.log("topic 47", err)
					else
						res.json(data);
				}
			)
		}
	}

module.exports = new topicController();

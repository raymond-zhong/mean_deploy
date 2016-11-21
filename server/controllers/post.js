console.log('post controller');
var mongoose = require('mongoose');
var Post = mongoose.model('Posts');

function postController() {
		this.create= function(req, res) {
			var newPost = new Post(req.body);
			newPost.save(function(err, data) {
				if(err)
					console.log("post 10", err)
				else
					res.json(data)
			})
		},

		this.read=function(req, res) {
				// console.log(req.params.id),
					Post.find({topic_id: req.params.id}, function(err, data) {
						if(err)
							console.log("post 19", err)
						else
							res.json(data)
					})
				},

		this.update= function(req, res) {
			// console.log(req.params.id),
			Post.update({_id: req.params.id},{ $inc: {like: 1}, $set: {_id: req.params.id}}, {upsert : true},
				function(err, data){
					if(err)
						console.log("post 32", err)
					else
								// console.log("hi"),
						Post.find({_id: req.params.id }, function(err, data) {
							if(err)
								console.log("post 36", err)
							else
								res.json(data);
						})
				}
			)
		}
	}
module.exports = new postController();

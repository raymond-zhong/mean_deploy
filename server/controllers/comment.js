console.log('comment controller');
var mongoose = require('mongoose');
var Comment = mongoose.model('Comments');

function commentController(){
		this.create= function(req, res) {
			var newComment = new Comment(req.body);
			newComment.save(function(err, data) {
				if(err)
					console.log("comment 10", err)
				else
					Comment.find({post_id: data.post_id}, function(err, data) {
						if(err)
							console.log("comment 14", err)
						else
							res.json(data);
					})
			})
		},

		this.read= function(req, res) {
			Comment.find({post_id: req.params.id}, function(err, data) {
				if(err)
					console.log("comment 24", err)
				else
					res.json(data)
			})
		}
	}
module.exports = new commentController();
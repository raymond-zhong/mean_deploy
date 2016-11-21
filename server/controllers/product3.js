console.log('product3 controller');
var mongoose = require('mongoose');
var Product3 = mongoose.model('Product3');

function product3Controller() {
	this.create= function(req, res) {
		var newP3 = new Product3(req.body);
		newP3.save(function(err, info) {
			if(err)
				console.log("topic 10", err)
			else {
				Product3.find({}, function(err, data) {
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
			Product3.find({}, function(err, data) {
				if(err)
					console.log("product3 25", err)
				else
					res.json(data)
			})
		},

		this.update= function(req, res) {
			Product3.findByIdAndUpdate(
				req.params.id,
				{$set: {bid: req.body.bid}},
				{new : true},
				function(err, data){
					if(err)
						console.log("product3 47", err)
					else
						res.json(data);
				}
			)
		}
	}

module.exports = new product3Controller();

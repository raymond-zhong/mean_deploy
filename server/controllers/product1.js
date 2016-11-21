console.log('product1 controller');
var mongoose = require('mongoose');
var Product1 = mongoose.model('Product1');

function product1Controller() {
		this.create= function(req, res) {
			var newP1 = new Product1(req.body);
			newP1.save(function(err, info) {
				if(err)
					console.log("topic 10", err)
				else {
					Product1.find({}, function(err, data) {
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
			Product1.find({}, function(err, data) {
				if(err)
					console.log("product1 25", err)
				else
					res.json(data)
			})
		},

		this.update= function(req, res) {
			Product1.findByIdAndUpdate(
				req.params.id,
				{$set: {bid: req.body.bid}},
				{new : true},
				function(err, data){
					if(err)
						console.log("product1 47", err)
					else
						res.json(data);
				}
			)
		}
	}

module.exports = new product1Controller();

console.log('product2 controller');
var mongoose = require('mongoose');
var Product2 = mongoose.model('Product2');

function product2Controller() {
	this.create= function(req, res) {
		var newP2 = new Product2(req.body);
		newP2.save(function(err, info) {
			if(err)
				console.log("topic 10", err)
			else {
				Product2.find({}, function(err, data) {
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
			Product2.find({}, function(err, data) {
				if(err)
					console.log("product2 25", err)
				else
					res.json(data)
			})
		},

		this.update= function(req, res) {
			Product2.findByIdAndUpdate(
				req.params.id,
				{$set: {bid: req.body.bid}},
				{new : true},
				function(err, data){
					if(err)
						console.log("product2 47", err)
					else
						res.json(data);
				}
			)
		}
	}

module.exports = new product2Controller();

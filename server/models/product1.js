console.log('product1 model');
var mongoose = require('mongoose');

var product1Schema = new mongoose.Schema({
	name        :String,
	user_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "Users" },
	bid       	:Number,
	created_at  :{ type: Date, default: Date.now },
});
// Mongoose automatically looks for the plural version of your model name, so a Friend model in Mongoose looks for 'friends/' in Mongo.
var product1 = mongoose.model('Product1', product1Schema);

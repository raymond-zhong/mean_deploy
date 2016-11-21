console.log('product2 model');
var mongoose = require('mongoose');

var product2Schema = new mongoose.Schema({
	name        :String,
	user_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "Users" },
	bid       	:Number,
	created_at  :{ type: Date, default: Date.now },
});
// Mongoose automatically looks for the plural version of your model name, so a Friend model in Mongoose looks for 'friends/' in Mongo.
var product2 = mongoose.model('Product2', product2Schema);

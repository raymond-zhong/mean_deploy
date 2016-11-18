console.log('topic model');
var mongoose = require('mongoose');

var topicSchema = new mongoose.Schema({
	name        :String,
	user_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "Users" },
	title       :String,
	description :String,
	created_at  :{ type: Date, default: Date.now },
	posts       :Number
});
// Mongoose automatically looks for the plural version of your model name, so a Friend model in Mongoose looks for 'friends/' in Mongo.
var topic = mongoose.model('Topics', topicSchema);

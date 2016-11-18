console.log('comments model');
var mongoose = require('mongoose');

var commentsSchema = new mongoose.Schema({
	name        :String,
	user_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "Users"},
	topic_id    :{ type: mongoose.Schema.Types.ObjectId, ref: "Topics"},
	post_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "Posts"},
	comment     :String,
	created_at  :{ type: Date, default: Date.now}
})
// Mongoose automatically looks for the plural version of your model name, so a Friend model in Mongoose looks for 'friends/' in Mongo.
var comments = mongoose.model('Comments', commentsSchema);

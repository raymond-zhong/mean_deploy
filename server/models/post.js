console.log('posts model');
var mongoose = require('mongoose');

var postsSchema =  new mongoose.Schema({
	name        :String,
	user_id     :{ type: mongoose.Schema.Types.ObjectId, ref: "Users"},
	topic_id    :{ type: mongoose.Schema.Types.ObjectId, ref: "Topics" },
	comments    :[{ type: mongoose.Schema.Types.Mixed, ref: "Comments"}],
	post        :String,
	like        :Number,
	dislike     :Number,
	created_at  :{ type: Date, default: Date.now }
});
// Mongoose automatically looks for the plural version of your model name, so a Friend model in Mongoose looks for 'friends/' in Mongo.
var posts = mongoose.model('Posts', postsSchema);

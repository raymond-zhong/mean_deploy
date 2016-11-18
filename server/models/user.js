console.log('users model');
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name        :String,
	created_at  :{ type: Date, default: Date.now },
	topics      :[{ type: mongoose.Schema.Types.Mixed, ref: "Topics" }],
	posts       :[{ type: mongoose.Schema.Types.Mixed, ref: "Posts" }],
	comments    :[{ type: mongoose.Schema.Types.Mixed, ref: "Comments"}]
});
// Mongoose automatically looks for the plural version of your model name, so a Friend model in Mongoose looks for 'friends/' in Mongo.
var user = mongoose.model('Users', userSchema);

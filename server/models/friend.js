console.log('friends model');
var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
    Fname: String,
    Lname: String,
    Birthday: Date,
    UserAdded: {type: Date, default: Date.now}
});
// Mongoose automatically looks for the plural version of your model name, so a Friend model in Mongoose looks for 'friends/' in Mongo.
var Friend = mongoose.model('Friend', FriendSchema);

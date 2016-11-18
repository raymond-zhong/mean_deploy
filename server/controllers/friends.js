console.log('friends controller');
// WE NEED TO ADD A FEW lines of code here!
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// Build out the methods in the friendsControllers below
function FriendsController(){
  this.index = function(req,res){
    Friend.find({}, function(err, friends){
    if (err) {console.log(err); }
    res.json(friends);
  })
  };
  this.create = function(req,res){
    console.log(req.body);
    // var new_friend = new Friend(req.body);
    // if (new_friend.Fname.length <4){
    //   console.log(new_friend.Fname);
    // res.json({error: 'You cant do that'})
    // }
    // new_friend
    Friend.create(req.body, function(err, friends){
    if (err) { console.log(err);}
    res.json(friends);
  })
  };
  this.update = function(req,res){
    Friend.update({_id: req.params.id},req.body, function(err, friends){
      console.log(req.body);
    if (err) { console.log(err);}
    res.json(friends);
  })
};
  this.delete = function(req,res){
    Friend.remove({_id: req.params.id}, function(err, friends){
      if (err) { console.log(err);}
    res.json(friends);
  })
  };
  this.show = function(req,res){
    // console.log(req.params.id)
    Friend.findOne({_id: req.params.id}, function(err, friend){
    if (err) {console.log(err); }
    res.json(friend);
  });
  }
}
module.exports = new FriendsController();

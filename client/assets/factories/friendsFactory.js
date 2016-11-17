//This is the first javascript file to load, so it initializes the module
var myApp = angular.module("myApp", ["ngRoute","ngMessages"]);


myApp.factory('friendsFactory', ['$http', function($http) {
  // constructor for our factory
  var friends = [];
  var friend = {};
  function FriendsFactory(){
    var _this = this;
    this.create = function(newFriend,callback){
      console.log(newFriend);
      $http.post('/friends', newFriend).then(function(returned_data){
        console.log(returned_data.data);
        friends=returned_data.data;
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(id,newFriend,callback){
      // console.log(changeFriend);
      $http.put('/friends/'+id, newFriend).then(function(returned_data){
        // console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
    }});
  };
    this.index = function(callback){
      $http.get('/friends').then(function(returned_data){
        // console.log(returned_data.data);
        friends = returned_data.data;
        callback(friends);
      });
 //Note: this can be shortened to $http.get('/friends').then(callback);
 //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){// what parameters do we need?
      console.log(id);
      $http.delete('/friends/'+id).then(function(returned_data){
        console.log(returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }});
  };
    this.show = function(id, callback){// what parameters do we need?
      // console.log(id);
      $http.get('/friends/'+id).then(function(returned_data){
        friend = returned_data.data;
        // console.log(friend);
        if (typeof(callback) == 'function'){
          callback(friend);
      }});
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getFriends = function(callback){
      callback(friends);
    };
    this.getFriend = function(callback){
        callback(friend);
    };
  }
  // console.log(new FriendsFactory());
  return new FriendsFactory();
}]);

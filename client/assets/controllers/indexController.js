
myApp.controller('indexController', ['$scope','friendsFactory', '$routeParams','$location', function($scope, friendsFactory, $routeParams, $location) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.
  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
  $scope.deleteFriend=function(id){
// console.log(id);
     friendsFactory.delete(id);
     $location.url('dashboard');
   };
   var index = function(){
                        friendsFactory.index(function(returnedData){
                          $scope.friends = returnedData;
                          // $scope.friend.Birthday = new Date($scope.friend.Birthday);
                          // console.log($scope.friends);
                        });
            };
   index();
/*
  OUR $scope.create function goes here <-- $scope because we need to access this method
  with ng-submit or ng-click (from the form in the previous assignment).
  Want to all of the friends when we get back?  We can re-run index.
*/
}]);

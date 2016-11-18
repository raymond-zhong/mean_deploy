//This is the first javascript file to load, so it initializes the module
var myApp = angular.module("myApp", ["ngRoute","ngMessages"]);

myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/dashboard', {
		templateUrl: 'partials/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/topic/:id', {
		templateUrl: 'partials/topic.html',
		controller: 'topicController'
	})
	.when('/user/:id', {
		templateUrl: 'partials/user.html',
		controller: 'userController'
	})
  // .when('/dashboard',{
  //   templateUrl: 'partials/index1.html',
  //   controller: 'indexController'
  // })
  // .when('/friends/:id',{
  //   templateUrl: 'partials/edit.html',
  //   controller: 'editController'
  // })
  // .when('/new',{
  //   templateUrl: 'partials/new.html',
  //   controller: 'newController'
  // })
  // .when('/show/:id',{
  //   templateUrl: 'partials/show.html',
  //   controller: 'editController'
  // })
  .otherwise({
    redirectTo: '/'
  });
});

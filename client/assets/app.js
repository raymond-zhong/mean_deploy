//This is the first javascript file to load, so it initializes the module
var myApp = angular.module("myApp", ["ngRoute","ngMessages"]);

myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/login.html',
    controller: 'loginController'
  })
  .when('/dashboard/', {
		templateUrl: 'partials/dashboard.html',
		controller: 'dashboardController'
	})
	.when('/result/', {
		templateUrl: 'partials/result.html',
		controller: 'resultController'
	})
  // .when('/topic/', {
  //   templateUrl: 'partials/topic.html',
  //   controller: 'topicController'
  // })
	// .when('/user/:id', {
	// 	templateUrl: 'partials/user.html',
	// 	controller: 'qController'
	// })
  .otherwise({
    redirectTo: '/'
  });
});

myApp.config(function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/index1.html',
    controller: 'indexController'
  })
  .when('/friends/:id',{
    templateUrl: 'partials/edit.html',
    controller: 'editController'
  })
  .when('/new',{
    templateUrl: 'partials/new.html',
    controller: 'newController'
  })
  .when('/show/:id',{
    templateUrl: 'partials/show.html',
    controller: 'editController'
  })
  .otherwise({
    redirectTo: '/'
  });
});

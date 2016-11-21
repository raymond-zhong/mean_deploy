myApp.controller('loginController', function($scope, $routeParams, userFactory) {
	var id = $routeParams.id;
	$scope.checkUser = function(user) {
		userFactory.readUsers(user, function(data) {
		})
	}

})

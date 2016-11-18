myApp.controller('userController', function($scope, $routeParams, userFactory) {
	var id = $routeParams.id;
	$scope.checkUser = function(user) {
		userFactory.readUsers(user, function(data) {
		})
	}
	userFactory.viewUser(id, function(data) {
		$scope.user = data;
	})
	$scope.createComment = function( post, name) {
		postFactory.createComment(post, name, function(info) {
			$scope.posts = info;
		})
	}
})

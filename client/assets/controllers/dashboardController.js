myApp.controller('dashboardController', function($scope, $routeParams, topicFactory, postFactory, userFactory, $location) {
	$scope.newTopic = {};
	userFactory.readUser(function(data) {
		$scope.user = data;
	}),
	topicFactory.readTopics(function(data) {
	$scope.topics = data;
})
})

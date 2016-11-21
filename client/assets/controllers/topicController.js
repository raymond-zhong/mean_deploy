myApp.controller('topicController', function($scope, $routeParams, topicFactory, postFactory, userFactory, $location) {
	var id = $routeParams.id;
	// var topic_id = null;
	$scope.newTopic = {};
	userFactory.readUser(function(data) {
		$scope.user = data;
	}),
	userFactory.readUser(function(data) {
		$scope.name = data;
	}),
	$scope.go = function ( path ) {
$location.path( path );
},
	$scope.createTopic = function(newTopic, name) {
	newTopic.name = name.name;
	newTopic.user_id = name._id;
	topicFactory.createTopic(newTopic, function(data, info) {
		userFactory.updateUserTopics(data, name, function(info) {});
		$scope.topics = data.data;
		// console.log(data);
		// console.log(data.data);
		$scope.newTopic = {};

	})
}
})

myApp.controller('dashboardController', function($scope, $routeParams, topicFactory, postFactory, userFactory, $location) {
	$scope.newTopic = {};
	userFactory.readUser(function(data) {
		$scope.user = data;
	})
	var id = $routeParams.id;
	userFactory.readUser(function(data){
		$scope.name = data;
	}),
	topicFactory.getTopic(id, function(data) {
	topic_id = id;
	console.log(topic_id)
			console.log('hi')
	$scope.topic = data;
	postFactory.readPosts(id, function(info) {
		$scope.posts = info;
	})
		}),
	topicFactory.readTopics(function(data) {
	$scope.topics = data;
}),
	topicFactory.getTopic(id, function(data) {
		topic_id = id;
		console.log(topic_id)
				console.log('hi')
		$scope.topic = data;
		postFactory.readPosts(id, function(info) {
			$scope.posts = info;
		})
	})
})

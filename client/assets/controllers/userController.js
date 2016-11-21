// console.log("qcontroller running")
myApp.controller('userController', function($scope, $routeParams, topicFactory, postFactory, userFactory, $location) {
	var id = $routeParams.id;
		var topic_id = null;

		userFactory.readUser(function(data) {
			$scope.name = data;
		})

		topicFactory.getTopic(id, function(data) {
			topic_id = data._id;
			$scope.topic = data;
			postFactory.readPosts(id, function(info) {
				$scope.posts = info;
			})


		})


	})

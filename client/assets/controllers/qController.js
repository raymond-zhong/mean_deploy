myApp.controller('qController', function($scope, $routeParams, topicFactory, postFactory, userFactory, $location) {
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
		}),

	postFactory.readPosts(id, function(info) {
		$scope.posts = info;
	}),
		$scope.addLike = function(post, id) {
			// post.name = name.name;
		// post.topic_id = id;
		// post.user_id = name._id;
			id = $routeParams.id
			 var post_id = post._id;
			//  console.log(id);
			//  console.log(post_id);
			postFactory.updatePost(id, post_id, function(info) {
				postFactory.readPosts(id, function(info) {
					$scope.posts = info;
					// console.log(info);
				$location.path('/user/'+$routeParams.id);


			})
				// $scope.posts = info;
				// console.log(info)

			})
		}
	})

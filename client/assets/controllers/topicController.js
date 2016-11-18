myApp.controller('topicController', function($scope, $routeParams, topicFactory, postFactory, userFactory) {
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

	$scope.createPost = function(newPost, name) {
		newPost.name = name.name;
        newPost.topic_id = topic_id;
		newPost.user_id = name._id;
    	postFactory.createPost(newPost, function(data) {
			postFactory.readPosts(id, function(info) {
				$scope.posts = info;
				numOfPosts = info.length;
	    		topicFactory.updateTopic(numOfPosts, id, function(yep){})
	    		userFactory.updateUserPosts(info, name, function(yep){})
			})
		})
	}

	$scope.createComment = function(newComment, post, name) {
		postFactory.createComment(newComment, post, name, function(info) {
			$scope.posts = info;
		})
	}
})

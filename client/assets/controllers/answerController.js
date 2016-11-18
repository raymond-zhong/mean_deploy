myApp.controller('answerController', function($scope, $routeParams, topicFactory, postFactory, userFactory, $location) {
	$scope.newTopic = {};
	userFactory.readUser(function(data) {
		$scope.user = data;
	})
	var id = $routeParams.id;
	userFactory.readUser(function(data){
		$scope.name = data;
	}),
	topicFactory.getTopic(id, function(data) {
	id = id;
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

	$scope.createPost = function(newPost, name) {
		newPost.name = name.name;
        newPost.topic_id = id;
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

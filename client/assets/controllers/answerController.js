myApp.controller('answerController', function($scope, $routeParams, topicFactory, postFactory, userFactory, $location) {
	var id = $routeParams.id;
	userFactory.readUser(function(data){
		$scope.name = data;
	}),
	topicFactory.getTopic(id, function(data) {
	id = id;
	$scope.topic = data;
}),
	postFactory.readPosts(id, function(info) {
		$scope.posts = info;
		}),
		$scope.go = function ( path ) {
  $location.path( path );
},
	$scope.createPost = function(newPost, name) {
		newPost.name = name.name;
        newPost.topic_id = id;
				newPost.like = 0;
		newPost.user_id = name._id;
    	postFactory.createPost(newPost, function(data, info) {
				postFactory.readPosts(id, function(info) {
					$scope.posts = info;
					numOfPosts = info.length;
    		topicFactory.updateTopic(numOfPosts, id, function(yep){})
    		userFactory.updateUserPosts(info, name, function(yep){})
				$scope.posts = info;
				$location.path('/dashboard');


			})
		})

	}
})

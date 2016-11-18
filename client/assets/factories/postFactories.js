myApp.factory('postFactory', function($http) {
	var factory = {};
	var topic_id = null;

	factory.setId = function(idForPost, callback) {
		idForPost = topic_id;
		callback(topic_id);
	}

	factory.readPosts = function(id, callback) {
		$http.get('/posts/'+id).success(function(data) {
			callback(data);
		})
	}

	factory.createPost = function(newPost, callback) {
		$http.post('/posts', newPost).success(function(data) {
			callback(data);
		})
	}

	factory.createComment = function(newComment, post, name, callback) {
		newComment.name = name.name
		newComment.user_id = name._id;
		newComment.topic_id = post.topic_id;
		newComment.post_id = post._id;
		$http.post('/comments', newComment).success(function(data) {
			var allComments = [];
			var comments = [];
			angular.forEach(data, function(comment) {
				allComments.push(comment);
				if(comment.user_id == name._id)
					comments.push(comment);
			})
			$http.post('/posts/'+post._id, {comments: allComments}).success(function(info) {
				callback(info);
			})
			console.log("comments from this post that match user", comments);
			// $http.get('/user/'+name._id).success(function(data){

			// $http.post('/user/comments/'+name._id, {comments: comments}).success(function(data) {
			// 	callback(data);
			// })
		})
	}

	return factory;
})

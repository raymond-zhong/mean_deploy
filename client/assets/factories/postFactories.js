myApp.factory('postFactory', function($http, $location) {
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
		// $location.path('/dashboard');
	}
	factory.updatePost = function(id, pid, callback) {
		$http.post('/posts/'+pid).success(function(data) {
			callback(data);
			// $location.path('/user/'+id);
		})
	}
	return factory;
})

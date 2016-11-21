myApp.factory('topicFactory', function($http, $location) {
	var factory = {};
	var currentUser = null;
	factory.createTopic = function(newTopic, callback) {
		$http.post('/topics', newTopic).success(function(data) {
			callback(data);
			$location.path('/dashboard');
		})
	},

	factory.readTopics = function(callback) {
		$http.get('/topics').success(function(data) {
			callback(data);
		})
	},
	factory.getTopic = function(id, callback) {
		$http.get('/topics/'+id).success(function(data) {
			callback(data);
		})
	},

	factory.setUser = function(user, callback) {
		this.currentUser = user;
		callback(currentUser);
	},

	factory.getUser = function(data, callback) {
		this.currentUser = data;
		callback(currentUser);
	},

	factory.updateTopic = function(numOfPosts, id, callback) {
		$http.post('/topics/'+id, {posts: numOfPosts}).success(function(data) {
			callback(data);
		})
	}
	factory.updatePost = function(numOfLikes, id, callback) {
		$http.post('/posts/'+id, {like: numOfLikes}).success(function(data) {
			callback(data);
		})
	}

	return factory;
})

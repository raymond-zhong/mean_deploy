myApp.factory('product3Factory', function($http, $location) {
	var factory = {};
	var currentUser = null;
	factory.createTopic = function(p3, callback) {
		$http.post('/product3', p3).success(function(data) {
			callback(data);
			$location.path('/dashboard');
		})
	},

	factory.readTopics = function(callback) {
		$http.get('/product3').success(function(data) {
			callback(data);
		})
	},
	factory.getTopic = function(id, callback) {
		$http.get('/product3/'+id).success(function(data) {
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
		$http.post('/product3/'+id, {posts: numOfPosts}).success(function(data) {
			callback(data);
		})
	}
	factory.updatePost = function(numOfLikes, id, callback) {
		$http.post('/product3/'+id, {like: numOfLikes}).success(function(data) {
			callback(data);
		})
	}

	return factory;
})

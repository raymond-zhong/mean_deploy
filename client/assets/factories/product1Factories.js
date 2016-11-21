myApp.factory('product1Factory', function($http, $location) {
	var factory = {};
	var currentUser = null;
	factory.createTopic = function(p1, callback) {
		$http.post('/product1', p1).success(function(data) {
			callback(data);
			$location.path('/dashboard');
		})
	},

	factory.readTopics = function(callback) {
		$http.get('/product1').success(function(data) {
			callback(data);
		})
	},
	factory.getTopic = function(id, callback) {
		$http.get('/product1/'+id).success(function(data) {
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
		$http.post('/product1/'+id, {posts: numOfPosts}).success(function(data) {
			callback(data);
		})
	}
	factory.updatePost = function(numOfLikes, id, callback) {
		$http.post('/product1/'+id, {like: numOfLikes}).success(function(data) {
			callback(data);
		})
	}

	return factory;
})

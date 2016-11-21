myApp.factory('userFactory', function($http, $location) {
	var factory = {};
	var thisUser = null;

	factory.readUsers = function(user, callback) {
		var newUser = true;
		$http.get('/user').success(function(data) {
			angular.forEach(data, function(regUser) {
				if(user.name == regUser.name) {
					console.log(user.name, "matches", regUser.name);
					newUser = false;
					thisUser = regUser
					$location.path('/dashboard');
				}
			})
// If user does not exist, create new user and redirect to dashboard
			if(newUser == true) {
				console.log("User is new, Creating...");
				$http.post('/user', user).success(function(data) {
					console.log("New user has been created...")
					thisUser = data;
					$location.path('/dashboard');
				})
			}
		})
		callback(thisUser);
	}

	factory.readUser = function(callback) {
		callback(thisUser);
	}


	factory.viewUser = function(id, callback) {
		$http.get('/user/'+id).success(function(data) {
			callback(data[0]);
		})
	}

	factory.updateUserTopics = function(data, name, callback) {
		var topics = [];
		angular.forEach(data, function(topic) {
			if(topic.user_id == name._id)
				topics.push(topic);
		})
		$http.post('/user/topics/'+name._id, {topics: topics}).success(function(data) {})
	}

	factory.updateUserPosts = function(info, name, callback) {
		var posts = [];
		// console.log(info);
		angular.forEach(info, function(post) {
			if(post.user_id == name._id)
				posts.push(post);
		})
		$http.post('/user/posts/'+name._id, {posts: posts}).success(function(data) {
			// console.log(data);
		})
	}

	return factory;
})

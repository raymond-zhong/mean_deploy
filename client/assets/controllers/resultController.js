myApp.controller('resultController', function($scope, $routeParams, product1Factory, product2Factory, product3Factory, userFactory, $location) {
	$scope.newProduct1 = {};
	$scope.newProduct2 = {};
	$scope.newProduct3 = {};
	userFactory.readUser(function(data) {
		$scope.user = data;
	}),
	product1Factory.readTopics(function(data1) {
	$scope.product1 = data1;
	console.log(data1);
	}),
	product2Factory.readTopics(function(data2) {
	$scope.product2 = data2;
	console.log(data2);
	}),
	product3Factory.readTopics(function(data3) {
	$scope.product3 = data3;
	console.log(data3);
	}),
		$scope.checkBid1 = function(p1, name) {
			p1.name = name.name;
			p1.user_id = name._id;
		// post.topic_id = id;
		// post.user_id = name._id;
			// id = $routeParams.id
			//  var post_id = post._id;
			//  console.log(id);
			//  console.log(post_id);
			product1Factory.createTopic(p1, function(data, info) {
				userFactory.updateUserTopics(data, name, function(info) {});
				$scope.p1bids = data.data;
				console.log(data.data);
				// console.log(data);
				// console.log(data.data);
				$scope.p1 = {};

			})
		},
			$scope.checkBid2 = function(p2, name) {
				p2.name = name.name;
				p2.user_id = name._id;
				product2Factory.createTopic(p2, function(data, info) {
					userFactory.updateUserTopics(data, name, function(info) {});
					$scope.p2bids = data.data;
					console.log(data.data);
					$scope.p2 = {};

				})
			},
				$scope.checkBid3 = function(p3, name) {
					p3.name = name.name;
					p3.user_id = name._id;
					product3Factory.createTopic(p3, function(data, info) {
						userFactory.updateUserTopics(data, name, function(info) {});
						$scope.p3bids = data.data;
						console.log(data.data);
						$scope.p3 = {};
					})
				}
})

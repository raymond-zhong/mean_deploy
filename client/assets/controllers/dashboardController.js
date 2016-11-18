myApp.controller('dashboardController', function($scope, topicFactory, userFactory) {
	$scope.newTopic = {};
	userFactory.readUser(function(data) {
		$scope.user = data;
	})
	$scope.createTopic = function(newTopic, name) {
		newTopic.name = name.name;
		newTopic.user_id = name._id;
		topicFactory.createTopic(newTopic, function(data, info) {
			userFactory.updateUserTopics(data, name, function(info) {});
			$scope.topics = data.data;
			$scope.newTopic = {};
			// socket.emit('created_topic', data.info);
		})
	}

	// socket.on('topic_added', function(data) {
	// 	$scope.$broadcast("new_topic", data);
	// })

	topicFactory.readTopics(function(data) {
		$scope.topics = data;
	})
})

// myApp.directive("topics", function() { // Added to an HTML just as class or id
// 	return {
// 		restrict: "A",  // E for Element
// 		link: function($scope, $element) {
// 			$scope.$on("new_topic", function(event, data) {
// 				console.log(data);
// 				$element.find("tbody").append(
// 					"<tr>"
// 						+"<td>"+data.category+"</td>"
// 						+"<td><a href='#/topic/"+data._id+"'>"+data.title+"</a></td>"
// 						+"<td><a href='#/user/"+data.user_id+"'>"+data.name+"</a></td>"
// 						+"<td></td>"
// 				   +"<tr>"
// 				);
// 			});
// 		}
// 	}
// })

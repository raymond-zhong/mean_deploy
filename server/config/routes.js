console.log('routes.js');
var post = require ('../controllers/post.js');
var topic = require('../controllers/topic.js');
var user = require('../controllers/user.js');
module.exports = function(app){
	app.get('/', function(req, res) {
		res.render('index');
	});

	app.get('/user', function(req, res) {
		user.read(req, res);
	});

	app.post('/user', function(req, res) {
		user.create(req, res);
	})

	app.get('/user/:id', function(req, res) {
		user.readOne(req, res);
	})

	app.post('/user/topics/:id', function(req, res) {
		user.updateTopics(req, res);
	})

	app.post('/user/posts/:id', function(req, res) {
		user.updatePosts(req, res);
	})

	app.post('/user/comments/:id', function(req, res) {
		user.updateComments(req, res);
	})

	app.get('/topics', function(req, res) {
		topic.read(req, res);
	})

	app.post('/topics', function(req, res) {
		topic.create(req, res);
	})

	app.post('/topics/:id', function(req, res) {
		topic.update(req, res);
	})

	app.get('/topics/:id', function( req, res) {
		topic.getOne(req, res);
	})

	app.post('/posts', function(req, res) {
		post.create(req, res);
	})

	app.get('/posts/:id', function(req, res) {
		post.read(req, res);
	})

	app.post('/posts/:id', function(req, res) {
		post.update(req, res);
	})

	app.post('/comments', function(req, res) {
		comment.create(req, res);
	})

	app.get('/comments/:id', function(req, res) {
		comment.read(req, res);
	})
}

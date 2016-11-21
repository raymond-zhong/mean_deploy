console.log('routes.js');
var product1 = require ('../controllers/product1.js');
var product2 = require ('../controllers/product2.js');
var product3 = require ('../controllers/product3.js');
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

	app.get('/product1', function(req, res) {
		product1.read(req, res);
	})

	app.post('/product1', function(req, res) {
		product1.create(req, res);
	})

	app.post('/product1/:id', function(req, res) {
		product1.update(req, res);
	})

	app.get('/product1/:id', function( req, res) {
		product1.getOne(req, res);
	})
	app.get('/product2', function(req, res) {
		product2.read(req, res);
	})

	app.post('/product2', function(req, res) {
		product2.create(req, res);
	})

	app.post('/product2/:id', function(req, res) {
		product2.update(req, res);
	})

	app.get('/product2/:id', function( req, res) {
		product2.getOne(req, res);
	})
	app.get('/product3', function(req, res) {
		product3.read(req, res);
	})

	app.post('/product3', function(req, res) {
		product3.create(req, res);
	})

	app.post('/product3/:id', function(req, res) {
		product3.update(req, res);
	})

	app.get('/product3/:id', function( req, res) {
		product3.getOne(req, res);
	})
}

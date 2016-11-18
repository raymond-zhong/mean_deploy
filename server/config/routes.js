console.log('routes.js');
var post = require ('../controllers/post.js');
var topic = require('../controllers/topic.js');
var user = require('../controllers/user.js');
module.exports = function(app){
  app.get('/', user.read);
  app.get('/user', user.read);
	app.post('/user', user.create);
	app.get('/user/:id', user.readOne);
	app.post('/user/topics/:id', user.updateTopics);
	app.post('/user/posts/:id', user.updatePosts);
	app.get('/topics', topic.read);
	app.post('/topics', topic.create);
	app.post('/topics/:id', topic.update);
	app.get('/topics/:id', topic.getOne);
	app.post('/posts', post.create);
	app.get('/posts/:id', post.read);
	app.post('/posts/:id', post.update);
}

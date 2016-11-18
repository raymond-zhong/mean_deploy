console.log('future routes');
var friends= require('../controllers/friends.js')
var post = require ('../controllers/post.js');
var topic = require('../controllers/topic.js');
var user = require('../controllers/user.js');
var comment = require('../controllers/comment.js');
module.exports = function(app){
  app.get('/friends', friends.index);
  app.get('/friends/:id', friends.show);
  app.post('/friends', friends.create);
  app.put('/friends/:id', friends.update);
  app.delete('/friends/:id', friends.delete);

  app.get('/user', user.read);
	app.post('/user', user.create);
	app.get('/user/:id', user.readOne);
	app.post('/user/topics/:id', user.updateTopics);
	app.post('/user/posts/:id', user.updatePosts);
	app.post('/user/comments/:id', user.updateComments);
	app.get('/topics', topic.read);
	app.post('/topics', topic.create);
	app.post('/topics/:id', topic.update);
	app.get('/topics/:id', topic.getOne);
	app.post('/posts', post.create);
	app.get('/posts/:id', post.read);
	app.post('/posts/:id', post.update);
	app.post('/comments', comment.create);
	app.get('/comments/:id', comment.read);

  // app.get('/users', Users.index);
  // //app.get('/users/new', Users.new);
  // app.get('/users/:id', Users.show);
  // //app.get('/users/:id/edit', Users.edit);
  // app.post('/users', Users.create);
  // app.put('/users/:id', Users.update);
  // app.delete('/users/:id', Users.delete);
  // app.post('/login', Users.login);
  // app.post('/register', Users.register);
}

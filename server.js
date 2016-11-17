var mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    express     = require('express'),
    path        = require('path'),
    root        = __dirname,
    port        = process.env.PORT || 8000,
    app         = express();
app.use(express.static(path.join(root, 'client')));
app.use(express.static(path.join(root, 'bower_components')));
// Use bodyParser to parse from data sent via HTTP post
app.use(bodyParser.json());

//Create connection to database
require('./server/config/mongoose.js');

//Create cat schema and attach it as a model to our database

// Routes go here!
var routes_setter = require('./server/config/routes.js');
routes_setter(app);
app.listen(port, function() {
  console.log(`server running on port ${ port }`);
});

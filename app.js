
express = require('express');
mongoose = require('mongoose');

config = require('./config');
routes = require('./routes');

app = express();

mongoose.connect(config.db.url);

routes(app); // Connect routes to app 

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});


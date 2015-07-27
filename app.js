
express = require('express');
mongoose = require('mongoose');
bodyParser = require('body-parser');

config = require('./config');
routes = require('./routes');

app = express();

app.use('/static', express.static(__dirname + '/static'))
app.use(bodyParser.json());

routes.set(app);

mongoose.connect(config.db.url);

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});


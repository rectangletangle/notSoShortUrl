_ = require('lodash');
express = require('express');
db = require('./db');

app = express();

app.get('/', function (req, res) {
	var value = req.param('foo', 'bar').toUpperCase();
	var	record = new db.Record({value: value})

	record.save(function(exc, records) {
		db.Record.find().exec(function(exc, records) {
				res.send(_.map(records, r => r.value));
		});
	});	
});

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});


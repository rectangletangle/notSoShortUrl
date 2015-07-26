
_ = require('lodash');

models = require('./models');

module.exports.index = function (req, res) {
	var value = req.param('foo', 'bar').toUpperCase();
	var	record = new models.Record({value: value})

	record.save(function(exc, records) {
		models.Record.find().exec(function(exc, records) {
				res.send(_.map(records, r => r.value));
		});
	});
};



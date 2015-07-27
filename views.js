
validUrl = require('valid-url');

services = require('./services');

module.exports = {
  index: function (req, res) {
    res.sendFile(__dirname + '/static/index.html');
	}, 
	shorten: function (req, res) {
		var fullUrl = req.body.full || '';

		if (validUrl.isUri(fullUrl)) {
			services.shorten(fullUrl, function(exc, url) {
  			res.status(201).json(url);
			});
		} else {
		  res.status(400).json({message: "'" + fullUrl + "' is not a valid URL"});
		}
	},
  forward: function(req, res) {
	  services.forward(req.params.id, function(exc, url) {
			if (url) {
			  res.redirect(301, url.full);
			} else {
        res.status(404).send('URL not found');
		  }
		});
	}
};
		

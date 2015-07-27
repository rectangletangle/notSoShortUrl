
config = require('./config');
models = require('./models');

function shortUrl(urlRecord) {
	return config.srvr.domain + config.shortPath + urlRecord._id;
}

function url(urlRecord) {
	return {full: urlRecord.full, 
				  short: shortUrl(urlRecord)};
} 

module.exports = {
	shorten: function (full, callback) {  

		var urlRecord = new models.Url({full: full});

		urlRecord.save(function(exc, urlRecord) {
			callback(exc, url(urlRecord));
  	});    
  },
  forward: function (id, callback) {
		models.Url.findOne({_id: id}, function(exc, urlRecord) {
			callback(exc, urlRecord ? url(urlRecord) : null);
		});
	}
};

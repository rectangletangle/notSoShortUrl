
mongoose = require('mongoose');
ttl = require('mongoose-ttl');
ShortId = require('mongoose-minid');

urlSchema = new mongoose.Schema({ 
	_id: {
		type: ShortId,
    len: 7,
    base: 64,
    retries: 4,
		index: true
  },
  full: String
});
urlSchema.plugin(ttl, {ttl: '7d'});

module.exports = {
	Url: mongoose.model('Url', urlSchema)
}


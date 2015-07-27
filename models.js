
mongoose = require('mongoose');
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

module.exports = {
	Url: mongoose.model('Url', urlSchema)
}


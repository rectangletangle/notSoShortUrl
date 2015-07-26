var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mkshort');

var schema = new mongoose.Schema({  
  value: String
});

module.exports.Record = mongoose.model('Record', schema);


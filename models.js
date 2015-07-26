
mongoose = require('mongoose');

recordSchema = new mongoose.Schema({  
  value: String
});

module.exports.Record = mongoose.model('Record', recordSchema);


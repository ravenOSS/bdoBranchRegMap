let mongoose = require('mongoose');

let branchSchema = mongoose.Schema({
  branchNumber: { type: Number, required: true, unique: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  lat: { type: Number },
  lng: { type: Number }
});

var Branch = mongoose.model('Branch', branchSchema);
module.exports = Branch;

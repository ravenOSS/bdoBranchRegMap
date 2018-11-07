let mongoose = require('mongoose');

let branchSchema = mongoose.Schema({
  branchNumber: { type: Number, required: true, unique: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: Number, required: true },
  telephone: { type: String, required: true },
  managerFirstName: { type: String },
  managerLastName: { type: String },
  locLat: { type: Number },
  locLng: { type: Number },
  role: { type: String, 'default': 'manager' }
});

var Branch = mongoose.model('Branch', branchSchema);
module.exports = Branch;

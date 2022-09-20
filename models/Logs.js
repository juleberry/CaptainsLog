const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

const logSchema = new Schema({
  // Blueprint goes in here
  title: { type: String },
  entry: { type: String },
  shipIsBroken: { type: Boolean, default: true}
});

const Logs = model('Logs', logSchema);
// Bonus: as a second argument to mongoose.Schema(), add { timestamps: true }

module.exports = Logs;
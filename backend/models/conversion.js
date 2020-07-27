const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const conversionSchema = new Schema({
  amount: { type: Number },
  from: { type: String },
  to: { type: String },
  result: { type: Number },
  date: { type: Date }
});

module.exports = mongoose.model("Conversion", conversionSchema);

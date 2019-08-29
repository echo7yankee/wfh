export {};

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema({
  role: {
    type: String,
    required: true
  },
  daysAllowed: {
    type: Number,
    required: true
  }
});

const Role = mongoose.model("Role", roleSchema);

module.exports = { Role };

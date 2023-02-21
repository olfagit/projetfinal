const mongoose = require("mongoose");

const cvSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
  },
  diplome: {
    type: String,
  },
  competences: {
    type: String,
  }
})

module.exports = mongoose.model("cv", cvSchema);

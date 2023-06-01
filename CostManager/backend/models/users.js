const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  //id, first_name, last_name, and birthday
  id: {
    type: String,
    required: true,
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  // birthday: {
  //   day: {
  //     type: Number,
  //     required: true,
  //   },
  //   month: {
  //     type: Number,
  //     required: true,
  //   },
  //   year: {
  //     type: Number,
  //     required: true,
  //   },
  // },
});

const userModel = new mongoose.model("users", userSchema);
module.exports = userModel;

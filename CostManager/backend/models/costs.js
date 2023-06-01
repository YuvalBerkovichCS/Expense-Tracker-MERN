const mongoose = require("mongoose");

const costSchema = new mongoose.Schema({
  //user_id, year, month, day, id, description, category, and sum.
  user_id: {
    type: Number,
  },
  year: {
    type: Number,
  },
  month: {
    type: Number,
  },
  day: {
    type: Number,
  },
  id: {
    type: Number,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  sum: {
    type: Number,
  },
});

const costModel = new mongoose.model("costs", costModel);
module.exports = costModel;

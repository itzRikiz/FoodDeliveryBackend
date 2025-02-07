const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  name: String,
  price: Number,
});
module.exports = mongoose.model("Menu", MenuSchema);

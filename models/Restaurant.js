const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  menus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
});
module.exports = mongoose.model("Restaurant", RestaurantSchema);

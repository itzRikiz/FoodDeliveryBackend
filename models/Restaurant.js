const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  address: String,
  cuisines:[{type:String}],
  rating:{type:Number,default:0},
  costForTwo:Number,
  cloudinaryImageId:{type:String},
  menus: [{ type: mongoose.Schema.Types.ObjectId, ref: "Menu" }],
});
module.exports = mongoose.model("Restaurant", RestaurantSchema);

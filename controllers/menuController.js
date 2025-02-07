const Menu = require("../models/Menu");
const Restaurant = require("../models/Restaurant"); 
exports.createMenu = async (req, res) => {
  try {
    const { restaurant, name, price } = req.body;
    const menu = await Menu.create({
      restaurant,
      name,
      price,
    });
    await Restaurant.findByIdAndUpdate(
      restaurant,
      { $push: { menus: menu._id } }, // Add the new Menu's _id to the Restaurant's menus array
      { new: true }
    );
    res.status(201).json(menu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

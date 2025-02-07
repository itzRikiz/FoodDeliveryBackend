const Restaurant = require("../models/Restaurant");

exports.createRestaurant = async (req, res) => {
  try {
    const { name, address } = req.body;
    const restaurant = await Restaurant.create({ name, address });
    res.status(201).json(restaurant);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getRestaurant = async (req, res) => {
  const restaurants = await Restaurant.find({});
  res.status(201).json({ restaurants });
};

exports.getRestaurantById = async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id).populate("menus");
  if (!restaurant)
    return res.status(404).json({ message: "Restaurant Not Found" });
  res.status(201).json({ restaurant });
};

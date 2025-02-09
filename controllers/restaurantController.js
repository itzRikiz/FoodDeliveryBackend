const Restaurant = require("../models/Restaurant");

exports.createRestaurant = async (req, res) => {
  try {
    const { name, address, cuisines, rating, costForTwo, cloudinaryImageId } =
      req.body;
    const restaurant = await Restaurant.create({
      name,
      address,
      cuisines,
      rating,
      costForTwo,
      cloudinaryImageId,
    });
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

exports.updateRestaurant = async (req, res) => {
  try {
    const { name, address, cuisines, rating, costForTwo, cloudinaryImageId } =
      req.body;
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      {
        name,
        address,
        cuisines,
        rating,
        costForTwo,
        cloudinaryImageId,
      },
      { new: true, runValidators: true }
    );
    if (!restaurant) {
      res.status(404).json({
        message: "No Restaurant Found",
      });
    }
    res
      .status(200)
      .json({ message: "Restaurant Updated SuccessFully", restaurant });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

exports.deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!restaurant) {
      res.status(404).json({
        message: "No Restaurant Found",
      });
    }
    res.status(200).json({ message: "Restaurant Deleted SuccessFully" });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

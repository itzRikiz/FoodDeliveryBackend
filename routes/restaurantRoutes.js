const express = require("express");
const {
  createRestaurant,
  getRestaurant,
  getRestaurantById,
} = require("../controllers/restaurantController");
const { auth, adminAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", auth, adminAuth, createRestaurant);
router.get("/", getRestaurant);
router.get("/:id", getRestaurantById);

module.exports = router;

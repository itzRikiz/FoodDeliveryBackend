const express = require("express");
const {
  createRestaurant,
  getRestaurant,
  getRestaurantById,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");
const { auth, adminAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", auth, adminAuth, createRestaurant);
router.get("/", getRestaurant);
router.get("/:id", getRestaurantById);
router.put("/:id", auth, adminAuth, updateRestaurant);
router.delete("/:id", auth, adminAuth, deleteRestaurant);

module.exports = router;

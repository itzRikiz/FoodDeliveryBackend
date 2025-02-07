const express = require("express");
const { createMenu } = require("../controllers/menuController");
const { auth, adminAuth } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", auth, adminAuth, createMenu);

module.exports = router;

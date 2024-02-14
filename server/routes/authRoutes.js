const express = require("express");
const { registerController, loginController, testController } = require("../controllers/authController");
const jwtAuth = require("../middlewares/jwtAuth");
const isAdmin = require("../middlewares/adminMiddleware");


const router = express.Router();

// Register Route
router.route("/register").post(registerController);

// Login Route
router.route("/login").post(loginController);

// test
router.get("/test", jwtAuth, isAdmin, testController);



module.exports = router;
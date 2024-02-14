const express = require("express");
const { checkout, paymentVerification } = require("../controllers/paymentController");
const jwtAuth = require("../middlewares/jwtAuth");

const router = express.Router();

// creating order route
router.route("/checkout", jwtAuth).post(checkout);

// for payment verification route
router.route("/paymentVerification", jwtAuth).post(paymentVerification);


module.exports = router;
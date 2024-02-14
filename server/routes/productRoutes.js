const express = require("express");
const { addProductController, getProductController, getSingleProductController } = require("../controllers/productController");

const router = express.Router();

router.route("/addproduct").post(addProductController);

router.route("/products").get(getProductController);

router.route("/:id").get(getSingleProductController);



module.exports = router;
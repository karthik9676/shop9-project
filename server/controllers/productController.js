const Product = require("../models/productModel");

// create product
exports.addProductController = async (req, res) => {
  try {
    const products = req.body;
    console.log(products);
    await Product.insertMany(products);
    return res.status(201).send({success:true, message:"Product added"})
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

// get products
exports.getProductController = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.status(200).send({
            success: true,
            products,
            total: products.length
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
};

// get single product
exports.getSingleProductController = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById({ _id: id })
        return res.status(200).send({success:true, product})
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: "Internal Server Error" });
    }
}
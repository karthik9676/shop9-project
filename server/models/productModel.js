const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image_main: {
        type: String,
        required: true,
    },
    images: [
        {
            id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        {
            id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        {
            id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        },
        {
            id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    colors: [],
    stock: {
        type: Number,
        required: true
    },
    reviews: {
        type: Number,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    featured: {
        type: Boolean,
        required: true
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
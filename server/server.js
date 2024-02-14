require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();

app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// mongodb initialization
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log("DB Connected"))
.catch((error) => console.log(error))

const PORT = process.env.PORT || 5000;

// routes
 app.use("/auth", require("./routes/authRoutes"));

// product route
app.use("/api/product", require("./routes/productRoutes"));
 
// payment route
app.use("/api/payment", require("./routes/paymentRoutes"));

// for getting key
app.get("/api/getkey", (req, res) => { 
    return res.status(200).json({ key:process.env.RAZORPAY_API_KEY });
});
 

app.listen(PORT, () => {
    console.log(`server is running at ${process.env.PORT}`)
})

const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../models/paymentModel");
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});


// Creating an order
exports.checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",
            receipt: "order_rcptid_11"
        };
        const order = await instance.orders.create(options);
        res.status(200).json({
            success: true,
            order
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Internal Server Error"})
    }
};

// verifying the order
exports.paymentVerification = async (req, res) => {
    try {
        // console.log(req.body)
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;
        
        let body = razorpay_order_id + "|" + razorpay_payment_id; 

        const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_API_SECRET)
            .update(body.toString())
            .digest('hex');
        // console.log("sig received", razorpay_signature);
        // console.log("sig generated", expectedSignature);

        const isAuthenticated = expectedSignature === razorpay_signature;
        if (isAuthenticated) { 
            // storing in database
            await Payment.create({
                razorpay_payment_id,
                razorpay_order_id,
                razorpay_signature
            });

            res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
        }
        else {
            res.status(400).json({success:false})
        }

    // res.status(200).json({
    //   success: true
    // });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
      }
};
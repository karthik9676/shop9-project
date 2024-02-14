const UserData = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../utils/authUtil");

// Register controller
exports.registerController = async (req, res) => {
    try {
        const { name, email, phone, password, address } = req.body;
        // validations
        if (!name) {
            return res.send({ message: "Name is Required" });
        }
        if (!email) {
            return res.send({ message: "email is Required" });
        }
        if (!phone) {
            return res.send({ message: "phone is Required" });
        }
        if (!password) {
            return res.send({ message: "password is Required" });
        }
        if (!address) {
            return res.send({ message: "address is Required" });
        }

        // to check user is existing 
        const isExisting = await UserData.findOne({ email: email });
        // if user is found
        if (isExisting) {
            return res.status(200).send({ success: false, message: "User Already Registered, Please Login" });
        }
        // if user is not found register him
        // hashing password in utils function
        const hashedPassword = await hashPassword(password);
        // saving the user
        const user = new UserData({ name, email, phone, password: hashedPassword, address });
        await user.save();
        return res.status(201).send({ success: true, message: "User Registered Successfully", user });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: "Internal Server Error" });
    }
};


// Login Controller
exports.loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        // validation
        // if (!email || !password) {
        //     return res.status(404).send({ success: false, message: "Invalid Email or Password" });
        // }
        // get user from db
        const user = await UserData.findOne({ email: email });
        // check user
        if (!user) {
            return res.status(404).send({ success: false, message: "User Not Found" });
        }
        // compare password
        const passwordCheck = await comparePassword(password, user.password);
        if (!passwordCheck) {
            console.log("true")
            return res.status(400).send({ success: false, message: "Incorrect Password" });
        }
        // creating token
        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '2d' });
        return res.status(200).send({
          success: true,
          message: "Login Success",
          user: {
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
          },
          token
        });

    } catch (error) {
        console.log(error);
        return res.status(500).send({ success: false, message: "Internal Server Error" });
    }

};

// test controller
exports.testController = async (req, res) => {
    res.send("Protected Route")
}


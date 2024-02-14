const UserData = require("../models/userModel");

const isAdmin = async (req, res, next) => {
    try {
        const user = await UserData.findById(req.user._id);
        if (user.role !== 1) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access"
            });
        }
        else {
            next();
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = isAdmin;
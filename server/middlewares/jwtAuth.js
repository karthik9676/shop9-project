const jwt = require("jsonwebtoken");

const jwtAuth = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.JWT_SECRET_KEY);
        req.user = decode;
        next()
    } catch (error) {
        console.log(error);
        return res.status(400).send({success:false, message:"Invalid Jwt"})
    }
 }


module.exports = jwtAuth;
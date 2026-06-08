const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.authuser = async (req, res, next) => {

    const token =
        req.cookies?.token ||
        req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({
            error: 'No token provided'
        });
    }

    try {

        console.log("Token:", token);
        console.log("JWT_SECRET:", process.env.JWT_SECRET);

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(401).json({
                error: 'User not found'
            });
        }

        req.user = user;
        next();

    } catch (err) {

        console.log("JWT Error:", err.message);

        return res.status(401).json({
            error: err.message
        });
    }
};
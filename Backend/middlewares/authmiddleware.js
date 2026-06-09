const blacklist = require('../models/blacklist');
const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');

module.exports.authuser = async (req, res, next) => {

    const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({
            error: 'No token provided'
        });
    }

  const isBlacklisted = await blacklist.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({
            error: 'Token is blacklisted. Please log in again.'
        });
    }
    

    try {
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


module.exports.authcaptain = async (req, res, next) => {

    const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');    
    if (!token) {
        return res.status(401).json({
            error: 'No token provided'
        });
    }

    const isBlacklisted = await blacklist.findOne({ token });
    if (isBlacklisted) {
        return res.status(401).json({
            error: 'Token is blacklisted. Please log in again.'
        });
    }

    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );
        req.captain = decoded;
        next();
    } catch (err) {
        console.log("JWT Error:", err.message);
        return res.status(401).json({
            error: err.message  
        });
    }
};

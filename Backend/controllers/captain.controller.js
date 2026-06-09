const captainModel = require('../models/captain');
const { validationResult } = require("express-validator");
const captainService = require('../services/captainservices');
const blacklistModel = require('../models/blacklist');




module.exports.registerCaptain = async (req, res, next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({ errors: error.array() });

    };

    const { name, email, password , vehicle } = req.body;

    const iscaptain = await captainModel.findOne({ email });
    if(iscaptain){
        return res.status(400).json({ error: "Captain already exists with this email" });
    }

    

    const hashedPassword = await captainModel.hashPassword(password);

    const captain = await captainService.createCaptain({ name, email, password: hashedPassword , color : vehicle.color , plateNumber : vehicle.plateNumber , capacity : vehicle.capacity , vehicleType : vehicle.vehicleType        });      

    const token = captain.generateAuthToken();

    res.status(201).json({ captain, token });

}   




module.exports.loginCaptain = async (req, res, next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({ errors: error.array() });
    }

    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password');
    if(!captain){
        return res.status(400).json({ error: "Invalid email or password" });

    }

    const ismatch = await captain.comparePassword(password);
    if(!ismatch){
        return res.status(400).json({ error: "Invalid email or password" });
    }   

    const token = captain.generateAuthToken();
    res.cookie('token', token, );

    res.json({ captain, token });

}

module.exports.getCaptainProfile = async (req, res, next) => {

    const captain = await captainModel.findById(req.captain.id).select('-password');

    if(!captain){
        return res.status(404).json({ error: "Captain not found" });
    }   

    res.json({ captain });

}

module.exports.logoutCaptain = async (req, res, next) => {

   res.clearCookie('token');

    const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');

     await blacklistModel.create({ token });
    res.json({ message: 'Logged out successfully' });



}
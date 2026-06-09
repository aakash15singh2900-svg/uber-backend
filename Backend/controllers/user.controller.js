const userModel = require('../models/user.model');
const blacklistModel = require('../models/blacklist');
const userService = require('../services/user.services');   

const { validationResult } = require("express-validator");


module.exports.register = async (req, res,next) => {
  const error =  validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ errors: error.array() });
    }
  


    const { name, email, password} = req.body;

    const existingUser = await userModel.findOne({ email});
    if (existingUser) {
        return res.status(400).json({ error: "User already exists with this email" });
    }   


    const  hashedPassword = await userModel.hashPassword(password);   

    const user = await userService.createUser({ name, email, password: hashedPassword });

    const token = user.generateAuthToken();


    res.status(201).json({ user, token });


}

module.exports.login = async (req, res,next) => {
  const error =  validationResult(req);

  if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
  }

  const { email, password } = req.body;

  const user = await userService.findUserByEmail(email);
  if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
  } 

  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
  } 

  const token = user.generateAuthToken();
  res.cookie('token', token, );

  res.json({ user, token });
}   


module.exports.profile = async (req, res, next) => {

    res.json({ user: req.user });   


}


module.exports.logout = async (req, res, next) => {

    res.clearCookie('token');

    const token = req.cookies?.token || req.header('Authorization')?.replace('Bearer ', '');

     await blacklistModel.create({ token });
    res.json({ message: 'Logged out successfully' });

}

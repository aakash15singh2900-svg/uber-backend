const userModel = require('../models/user.model');

module.exports.createUser = async ({ name, email, password }) => {

  if (!name || !email || !password ) {
    throw new Error('All fields are required');
  }

  // ✅ create user (WITH await + role)
  const user = await userModel.create({
    name,
    email,
    password
  });

  return user;
};

module.exports.findUserByEmail = async (email) => {
  return await userModel.findOne({ email }).select('+password');
};

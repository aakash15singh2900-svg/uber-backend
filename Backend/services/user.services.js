const userModel = require('../models/user.model');

module.exports.createUser = async ({ name, email, password, role }) => {

  if (!name || !email || !password || !role) {
    throw new Error('All fields are required');
  }

  // ✅ check existing user
  const existingUser = await userModel.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists with this email");
  }

  // ✅ create user (WITH await + role)
  const user = await userModel.create({
    name,
    email,
    password,
    role
  });

  return user;
};

module.exports.findUserByEmail = async (email) => {
  return await userModel.findOne({ email }).select('+password');
};

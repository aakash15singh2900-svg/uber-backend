const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');    

const userSchema = new mongoose.Schema({
    name: {
        type: String,   
        required: true
    },
    email: {
        type: String,   
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },

  role: {
  type: String,
  
  enum: ['rider', 'driver'],
  required: true,
  default: 'rider'
},

    socketId: {
        type: String,
    },
     
    createdAt: {
        type: Date,
        default: Date.now
    }
});





userSchema.methods.generateAuthToken = function () {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET missing");
    }

    return jwt.sign(
        { id: this._id, role: this.role },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );
};

userSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}
userSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}






const User = mongoose.model('User', userSchema);

module.exports = User;  
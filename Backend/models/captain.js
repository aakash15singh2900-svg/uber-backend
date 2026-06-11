const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        select: false
    },

    socketId: {
        type: String
    },

    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },

    vehicle: {

        color: {
            type: String,
            required: true
        },

        plateNumber: {
            type: String,
            required: true,
            unique: true
        },

        capacity: {
            type: Number,
            required: true
        },

        vehicleType: {
            type: String,
            enum: ['car', 'bike', 'scooter'],
            required: true
        },

        location: {
            latitude: {
                type: Number
            },

            longitude: {
                type: Number
            }
        }
    }

}, 

);

captainSchema.methods.generateAuthToken = function () {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET missing");
    }

    return jwt.sign(
        { id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: "24h" }
    );
};

captainSchema.methods.comparePassword = async function(candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}       



const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;
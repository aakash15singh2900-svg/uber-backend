const captainModel = require('../models/captain');




module.exports.createCaptain = async ({ name, email, password , color , plateNumber,    capacity , vehicleType}) =>  {

    if(!name || !email || !password || !color || !plateNumber || !capacity || !vehicleType){
        throw new Error('All fields are required');
    }   

    const captain = await captainModel.create({
        name,
        email,  
        password, 
        vehicle : {
            color,
            plateNumber,
            capacity,
            vehicleType

        }


    });

    return captain;
};



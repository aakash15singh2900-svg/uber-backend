const express = require('express');
const router = express.Router();

const {body} = require('express-validator');

const captainController = require('../controllers/captain.controller');
const authmiddleware = require('../middlewares/authmiddleware');




router.post('/registercaptain',
    [
        body('email')
            .isEmail().withMessage('Please enter a valid email')
            .normalizeEmail(),  
        body('name')
            .trim()
            .notEmpty().withMessage('Name is required'),    
        body('password')                    
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long'),
        body('vehicle.color')
            .notEmpty().withMessage('Vehicle color is required'),
        body('vehicle.plateNumber')
            .notEmpty().withMessage('Vehicle plate number is required'),
        body('vehicle.capacity')
            .isInt({ min: 1 }).withMessage('Vehicle capacity must be a positive integer'),  
        body('vehicle.vehicleType')

            .isIn(['car', 'bike', 'scooter']).withMessage('Vehicle type must be either car, bike, or scooter')
    ],
    captainController.registerCaptain
);      

router.post('/logincaptain',
    [
        body('email')
            .isEmail().withMessage('Please enter a valid email')
            .normalizeEmail(),
        body('password')
            .notEmpty().withMessage('Password is required')
    ],
    captainController.loginCaptain
);

router.get('/captainprofile', authmiddleware.authcaptain, captainController.getCaptainProfile);

router.get('/logoutcaptain', authmiddleware.authcaptain, captainController.logoutCaptain);



module.exports = router;
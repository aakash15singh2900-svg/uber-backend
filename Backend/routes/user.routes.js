const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/authmiddleware');

const { body } = require('express-validator');


console.log(userController);
console.log("register =", typeof userController.register);
console.log("login =", typeof userController.login);
console.log("profile =", typeof userController.profile);

console.log(typeof authMiddleware?.authUser);

router.post(
  '/register',
  [
    // ✅ email validation + normalization
    body('email')
      .isEmail().withMessage('Please enter a valid email')
      .normalizeEmail(),

    // ✅ name validation
    body('name')
      .trim()
      .notEmpty().withMessage('Name is required'),

    // ✅ password validation
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),

    // ✅ role validation (IMPORTANT)
    body('role')
      .isIn(['rider', 'driver'])
      .withMessage('Role must be either rider or driver')
  ],

  userController.register
);


router.post(
  '/login',
  [ 
    body('email')
      .isEmail().withMessage('Please enter a valid email')
      .normalizeEmail(),  
    body('password')
      .notEmpty().withMessage('Password is required')
  ],
  userController.login
);  


router.get('/profile', authMiddleware.authuser, userController.profile);

router.get('/logout', authMiddleware.authuser, userController.logout);


module.exports = router;
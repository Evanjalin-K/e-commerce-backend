// Create a router using express.js
const express = require('express');
const userController = require('../controllers/userController');
const auth = require('../middleware/auth')
const userRouter = express.Router();

// Add routes

//userRouter.get('/', userController.getdata);
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login);
userRouter.get('/logout', userController.logout);
userRouter.get('/profile', auth.verifyToken, userController.getProfile);
userRouter.put('/update', auth.verifyToken, userController.updateProfile);
userRouter.delete('/delete', auth.verifyToken, userController.deleteProfile);






//Export the router
 module.exports = userRouter;
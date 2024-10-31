// Create a router using express.js
const express = require('express');
const userController = require('../controllers/userController');

const userRouter = express.Router();

// Add routes

userRouter.get('/', userController.getdata);

//Export the router
 module.exports = userRouter;
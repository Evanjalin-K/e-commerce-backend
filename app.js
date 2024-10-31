// Create an express app

const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();

// use is used to add the middleware, it will be used according to the order
app.use('/api/v1', userRouter);

module.exports = app;

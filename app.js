// Create an express app

const express = require('express');
const userRouter = require('./routes/userRoutes');
const requestLogger = require('./utils/logger');
const unknownEndpoint = require('./utils/Error');
const cors = require('cors');
const cookieParser = require('cookie-parser')
//const morgan = require('morgan');
const app = express();


// Morgan default library for log data
//app.use(morgan('dev'))
//middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials:true
}));
app.use(cookieParser());

app.use(express.json());

app.use(requestLogger);

// use is used to add the middleware, it will be used according to the order
app.use('/api/v1', userRouter);

app.use(unknownEndpoint);

module.exports = app;

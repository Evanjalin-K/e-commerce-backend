// Step-1 - Connect to the database

// Step-2 - Start the server
const mongoose = require('mongoose');
const { MONGODB_URI } = require('./utils/config');
const app = require('./app')

mongoose.connect(MONGODB_URI)
.then(() => {

    // Connect the database first 
    console.log('Connected to MongoDB.....')

    // Start the server using express.js

    app.listen(3001, () => {
        console.log('Server is running on port 3001');
        
    });
})
.catch((err => console.error('Could not connect to MongoDB', err)));





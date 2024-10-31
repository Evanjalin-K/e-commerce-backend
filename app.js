// Create an express app

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send ('Hello Jo... You are bold enough to handle all the situations')
})

module.exports = app;

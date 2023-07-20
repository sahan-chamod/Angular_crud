const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./server');

var employeeController = require('./controllers/employeeController.js')

var app = express(); // Call express as a function to create the app instance

app.use(bodyParser.json());

app.listen(3000, () => console.log('server started in port 3000'));

app.use('/employees', employeeController)

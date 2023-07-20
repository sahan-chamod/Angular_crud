// const express = require('express');
// const router = express.Router();

// const { Employee } = require('../models/employee');

// // => localhost:3000/employees GET
// router.get('/', async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.send(employees);
//   } catch (err) {
//     console.log('Error in retrieving Employee data:', err);
//     res.status(500).send('Internal Server Error');
//   }
// });

// router.post('/', async (req, res) => {
//   try {
//    var emp = new Employee({
//     name: req.body.name,
//     position: req.body.position,
//     office: req.body.office,
//     salary: req.body.salary,
//    })
//    emp.save((err, doc)=>{
//     if(!err){res.send(doc);}
//     else {console.log('error in Employee save :' + JSON.stringify(err, undefined, 2))}
//    })
//   } catch (err) {
//     console.log('Error in retrieving Employee data:', err);
//     res.status(500).send('Internal Server Error');
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const { Employee } = require('../models/employee'); 
const { isValidObjectId } = require('mongoose');

// GET all employees
router.get('/:id', async (req, res) => {
  try {
    const employeeId = req.params.id; // Get the employee ID from the URL parameter

    const employee = await Employee.findById(employeeId);

    if (!employee) {
      return res.status(404).send('Employee not found');
    }

    res.send(employee);
  } catch (err) {
    console.log('Error in retrieving Employee data:', err);
    res.status(500).send('Internal Server Error');
  }
});

// POST a new employee

router.post('/', async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const savedEmployee = await newEmployee.save();
    res.status(201).send(savedEmployee);
  } catch (err) {
    console.log('Error in saving Employee data:', err);
    res.status(500).send('Internal Server Error');
  }
});

// PUT a Employee

router.put('/:id', async (req, res) => {
  try {
    const employeeId = req.params.id; // Get the employee ID from the URL parameter

    const employee = await Employee.findById(employeeId);

    if (!employee) {
      return res.status(404).send('Employee not found');
    }

    // Update the employee object with the data sent in the request body
    // Assuming the request body contains the updated employee information
    employee.set(req.body); // Use the set method to update properties from the request body

    // Save the updated employee object
    const updatedEmployee = await employee.save();

    res.send(updatedEmployee);
  } catch (err) {
    console.log('Error in updating Employee data:', err);
    res.status(500).send('Internal Server Error');
  }
});

//delete employee

router.delete('/:id', async (req, res) => {
  try {
    const employeeId = req.params.id; // Get the employee ID from the URL parameter

    const employee = await Employee.findById(employeeId);

    if (!employee) {
      return res.status(404).send('Employee not found');
    }

    // Delete the employee
    await employee.remove();

    res.send('Employee deleted successfully');
  } catch (err) {
    console.log('Error in deleting Employee data:', err);
    res.status(500).send('Internal Server Error');
  }
});








module.exports = router;

const express = require('express');
const app  = express.Router();
const employeecontroller = require('../controllers/employeeController');
//
app.get("/",employeecontroller.getEmployee);
//
app.get("/:id",employeecontroller.getEmployeeId);
//
app.get("/tax/:sal",employeecontroller.getEmployeeSalaye);
//
app.get("/retire/:age",employeecontroller.getEmployeeAge);
//
app.post("/",employeecontroller.addEmployee);
//


module.exports = app;
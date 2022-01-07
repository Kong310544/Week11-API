const express = require('express');
const app  = express.Router();
const employeecontroller = require('../controllers/employeeController');

app.get("/employee",employeecontroller.getEmployee);
//
app.get("/employee/:id",employeecontroller.getEmployee);
//
app.get("/employee/tax/:sal",employeecontroller.getEmployee);
//
app.get("/employee/retire/:age",employeecontroller.getEmployee);
//
app.post("/employee",employeecontroller.addEmployee);













module.exports = app;
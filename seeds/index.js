const sequelize = require('../config/connection');
const { Customers, Employees, Units } = require('../models');

const customerSeedData = require('./customersSeedData.json');
const employeeSeedData = require('./employeesSeedData.json');
const unitSeedData = require('./unitsSeedData.json');
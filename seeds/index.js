const sequelize = require('../config/connection');
const { Customers, Employees, Units } = require('../models');

const customerSeedData = require('./customersSeedData.json');
const employeeSeedData = require('./employeesSeedData.json');
const unitSeedData = require('./unitsSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const customers = await Customers.bulkCreate(customerSeedData);
    const employees = await Employees.bulkCreate(employeeSeedData);
    const units = await Units.bulkCreate(unitSeedData);

    process.exit(0);
};

seedDatabase()
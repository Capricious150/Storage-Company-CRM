const sequelize = require('../config/connection');
const { Customers, Employees, Units, Tasks } = require('../models');

const customerSeedData = require('./customersSeedData.json');
const employeeSeedData = require('./employeesSeedData.json');
const unitSeedData = require('./unitsSeedData.json');
const tasksSeedData = require('./tasksSeedData.json');

console.log(Tasks);
console.log(tasksSeedData);





const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await Employees.bulkCreate(employeeSeedData);
    console.log('\n----- EMPLOYEES SEEDED -----\n');

    await Customers.bulkCreate(customerSeedData);
    console.log('\n----- CUSTOMERS SEEDED -----\n');

    await Units.bulkCreate(unitSeedData);
    console.log('\n----- UNITS SEEDED -----\n');

    await Tasks.bulkCreate(tasksSeedData);
    console.log('\n----- TASKS SEEDED -----\n');

    process.exit(0);
};

seedDatabase()
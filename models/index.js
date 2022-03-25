const Employees = require('./Employees')
const Units = require('./Units')
const Customers = require('./Customers')
const Tasks = require('./Tasks')


Customers.belongsTo(Employees, {
    foreignKey: 'employee_id',
    onDelete: 'CASCADE',
});

Units.belongsTo(Customers, {
    foreignKey: 'customer_id',
});

Tasks.belongsTo(Employees, {
    foreignKey: 'employee_id',
    onDelete: 'CASCADE',
});

// Employees.hasOne(Employees, {
//     forgeignKey: 'manager_id',
//     onDelete: 'CASCADE',
// });

module.exports = {Employees, Units, Customers, Tasks}
const Employees = require('./Employees')
const Units = require('./Units')
const Customers = require('./Customers')

// Customers.hasOne(Employees, {
//     foreignKey: 'employee_ref',
//     onDelete: 'CASCADE',
// });

// Units.belongsTo(Customers, {
//     foreignKey: 'customer_id',
// });

// Employees.hasOne(Employees, {
//     forgeignKey: 'manager_id',
//     onDelete: 'CASCADE',
// });

module.exports = {Employees, Units, Customers}
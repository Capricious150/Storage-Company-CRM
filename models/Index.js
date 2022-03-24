const Employees = require('./Employees')
const Units = require('./Units')
const Customers = require('./Customers')


Customers.belongsTo(Employees, {
    foreignKey: 'employee_id',
    onDelete: 'CASCADE',
});

Units.belongsTo(Customers, {
    foreignKey: 'customer_id',
});

// Employees.hasOne(Employees, {
//     forgeignKey: 'manager_id',
//     onDelete: 'CASCADE',
// });

module.exports = {Employees, Units, Customers}
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Employees extends Model {}

Employees.init (
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10],
            },
        },
        // first name and last name
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // privlages key datatype.string
        customers: {
            type: DataTypes.ARRAY,
            references: {
                model: 'Customers',
                key: 'id',
            },
        },
        manager_id: {
            type: DataTypes.INTERGER,
            references: {
                model: 'Employees',
                key: 'id',
                unique: true
            },
        },
    },
    {
        sequelize,
        timestamps: true,
    },
);

module.exports = Employees;
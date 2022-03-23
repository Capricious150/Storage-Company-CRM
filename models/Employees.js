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
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            Validate: {
                isAlphanumeric: true,
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            Validate: {
                isAlphanumeric: true,
            }
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // privlages key datatype.string
        privlages: {
            type: DataTypes.TEXT,
        },
        customers: {
            type: DataTypes.TEXT,
        },
        manager_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Employees',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
    },
);

module.exports = Employees;
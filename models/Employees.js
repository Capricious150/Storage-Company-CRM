const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class employees extends Model {}

employees.init (
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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
        manager: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'employees',
    },
);

module.exports = employees;
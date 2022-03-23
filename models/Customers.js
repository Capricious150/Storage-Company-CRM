const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Customers extends Model {}

Customers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        current_customer: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        good_standing: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        current_balance: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
        },
        insured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        insurance_type: {
            type: DataTypes.TEXT(300),
            allowNull: false,
        },
        customer_since: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        units_owned: {
            type: DataTypes.TEXT,
        },
        employee_ref: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employees',
                key: 'id',
                unique: false,
            },
        },
    },
    {
        sequelize,
        timestamps: true,
    },
);

module.exports = Customers;
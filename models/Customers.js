const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Customers extends Model {}

Customers.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        current_customer: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        good_standing: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        current_balance: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            defaultValue: 0,
        },
        insured: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        insurance_type: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        service_start: {
            type: DataTypes.DATE,
            allowNull: false
        },
        service_end: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: true
    }
);

module.exports = Customers;
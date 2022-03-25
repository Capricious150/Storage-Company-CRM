const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Customers } = require('./Customers')

class Units extends Model {}

Units.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        unit_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        available: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        insured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        insured_items: {
            type: DataTypes.TEXT,
        },
        can_transport: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'customers',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'units',
    },
);

module.exports = units;
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Units extends Model {}

Units.init (
    {
        id: {
            type: DataTypes.INTERGER,
            allowNull: false,
            primaryKey: true,
        },
        unit_type: {
            type: DataTypes.STRING(30),
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
            type: DataTypes.TEXT(500),
        },
        can_transport: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        customer_id: {
            type: DataTypes.INTERGER,
            references: {
                model: 'Customers',
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

module.exports = Units;
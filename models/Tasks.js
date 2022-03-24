const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class tasks extends Model {}

tasks.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        employee_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'employee',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
    },
);

module.exports = tasks;
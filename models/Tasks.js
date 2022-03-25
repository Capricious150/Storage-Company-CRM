const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tasks extends Model {}

Tasks.init (
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
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
                model: 'employees',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: true,
        modelName: 'tasks',
    },
);

module.exports = Tasks;
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
            
        }
    }
)
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// Login function which compared entered password with correct password. Returns a BOOL.
class Employees extends Model {
    checkPassword(loginPw){
        if (loginPw === this.password){
            return true
        } else {
            return false
        };
    }
}


Employees.init (
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
        // For use in later features where only certain employees can view/add more employees
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

module.exports = Employees;
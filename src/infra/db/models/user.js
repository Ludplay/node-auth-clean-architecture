const { DataTypes, Model, Sequelize } = require('sequelize');

let UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue: DataTypes.NOW
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        city_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true
        }
    }, {
        modelName: 'User',
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    User.associate = (models) => {
        User.belongsTo(models.City, {
            foreignKey: 'city_id',
            as: 'city'
        });
    };

    return User;
}

module.exports = UserModel;
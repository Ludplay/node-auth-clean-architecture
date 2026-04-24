const { Sequelize } = require('sequelize');
const sequelizeConfig = require('../config/config-sequelize.json');

const env = process.env.NODE_ENV || 'development';
const config = sequelizeConfig[env];

const { host, database, username, password, dialect, port } = config;

const sequelize = new Sequelize(
    database, 
    username, 
    password, 
    {
        host,
        port,
        dialect,
        logging: console.log,
        define: {
            timestamps: true,
            underscored: true
        }
    }
);

module.exports = sequelize;
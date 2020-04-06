const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

console.log('NODE_ENV: ', env);
const connection = new Sequelize(dbConfig[env]);

const User = require('../models/Users');
const Product = require('../models/Products');

User.init(connection);
Product.init(connection);

module.exports = connection;

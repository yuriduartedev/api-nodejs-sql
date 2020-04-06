const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const User = require('../models/Users');
const Product = require('../models/Products');

User.init(connection);
Product.init(connection);

module.exports = connection;

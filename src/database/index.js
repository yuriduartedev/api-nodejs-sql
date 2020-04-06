const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);

const Product = require('../models/Products');
Product.init(connection);

module.exports = connection;

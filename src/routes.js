const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

module.exports = routes;

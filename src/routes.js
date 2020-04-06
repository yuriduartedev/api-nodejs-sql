const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

routes.get('/users', UserController.getAllUsers);
routes.get('/users/:id', UserController.getUser);
routes.post('/users', UserController.addUser);
routes.put('/users/:id', UserController.updateUser);
routes.delete('/users/:id', UserController.deleteUser);

module.exports = routes;

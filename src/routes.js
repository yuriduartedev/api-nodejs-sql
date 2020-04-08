const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');
const OrderController = require('./controllers/OrderController');

routes.get('/products', ProductController.index);
routes.post('/products', ProductController.store);

routes.get('/users', UserController.getAllUsers);
routes.get('/users/:id', UserController.getUser);
routes.post('/users', UserController.addUser);
routes.put('/users/:id', UserController.updateUser);
routes.delete('/users/:id', UserController.deleteUser);

routes.get('/orders', OrderController.getAllOrders);
routes.get('/users/:user_id/orders', OrderController.getOrderByUser);
routes.post('/users/:user_id/orders', OrderController.addOrder);

module.exports = routes;

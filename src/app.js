const express = require('express');

const app = express();

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');


app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

module.exports = app;

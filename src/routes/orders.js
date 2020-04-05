const express = require('express');
const routes = express.Router();

// Return all orders
routes.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'Using get to list all orders'
  })
});

// Return a order by id
routes.get('/:id', (req, res, next) => {
  const { id } = req.params;

  res.status(200).send({
    message: 'Using Get with id params to return a exclusive order',
    id
  })
});

// Insert a order
routes.post('/', (req, res, next) => {
  const { product_id, quantity } = req.body;
  const order = { product_id, quantity }

  res.status(201).send({
    message: 'Order created',
    order
  });
});

// Update a order
routes.patch('/:id', (req, res, next) => {
  const { id } = req.params;

  res.status(200).send({
    message: 'Using Patch method to update a orders'
  })
});

// Delete a orders
routes.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  res.status(201).send({
    message: 'Using Delete method to delete a order by id'
  });
});

module.exports = routes;

const express = require('express');
const routes = express.Router();

// Return all products
routes.get('/', (req, res, next) => {
  res.status(200).send({
    message: 'Using get to list all products'
  })
});

// Return a product by id
routes.get('/:id', (req, res, next) => {
  const { id } = req.params;

  res.status(200).send({
    message: 'Using Get with id params to return a exclusive product',
    id
  })
});

// Insert a product
routes.post('/', (req, res, next) => {
  const { name, price } = req.body
  const product = { name, price }

  res.status(201).send({
    message: 'Product successfully created',
    product
  });
});

// Update a product
routes.patch('/:id', (req, res, next) => {
  const { id } = req.params;

  res.status(200).send({
    message: 'Using Patch method to update a products'
  })
});

// Delete a products
routes.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  res.status(201).send({
    message: 'Using Delete method to delete a product by id'
  });
});

module.exports = routes;

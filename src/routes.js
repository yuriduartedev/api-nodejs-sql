const express = require('express');

const routes = express.Router();

routes.get('/test', (req, res, next) => {
  res.status(200).send({
    message: 'Ok'
  });
});

module.exports = routes;

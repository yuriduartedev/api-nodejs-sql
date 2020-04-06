const Product = require('../models/Products');

module.exports = {
  async index(req, res) {
    const products = await Product.findAll();

    return res.status(200).json(products);
  },

  async store(req, res) {
    const { name, price } = req.body;

    const product = await Product.create({ name, price });

    return res.status(201).json(product);
  }
};

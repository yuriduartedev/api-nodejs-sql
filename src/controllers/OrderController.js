const User = require('../models/Users');
const Order = require('../models/Orders');

module.exports = {
  async getAllOrders(req, res) {
    try {
      const allOrders = await Order.findAll();
      if (allOrders.length > 0) {
        const response = {
          quantity: allOrders.length,
          orders: allOrders.map(order => {
            return {
              id: order.id,
              user_id: order.user_id,
              quantity: order.quantity,
              request: {
                type: 'GET',
                description: 'Return all orders',
                url: `${process.env.APP_HOST}/users/${order.user_id}/${order.id}`
              }
            }
          })
        }
        return res.status(200).json(response);
      } else {
        return res.status(301).json({ error: 'Order not found' });
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async getOrderByUser(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id, {
      include: { association: 'orders' }
    });

    return res.json(user);
  },

  async addOrder(req, res) {
    const { user_id } = req.params;
    const { quantity } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: 'User not found' });
    }

    try {
      const order = await Order.create({
        quantity,
        user_id
      });
      return res.status(201).json(order);
    } catch (error) {
      console.log(user_id);
      console.log(quantity);

      console.log("Passou aqui");

      return res.status(500).json(error);
    }
  }
};

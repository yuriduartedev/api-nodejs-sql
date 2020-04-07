const User = require('../models/Users');

module.exports = {
  async getAllUsers(req, res) {
    try {
      const allUsers = await User.findAll();
      if (allUsers.length > 0) {
        const response = {
          quantity: allUsers.length,
          users: allUsers.map(user => {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              password: user.password,
              createdAt: user.createdAt,
              ipdatedAt: user.ipdatedAt,
              request: {
                type: 'GET',
                description: 'Return all users',
                url: `${process.env.APP_HOST}/users/${user.id}`
              }
            }
          })
        }
        return res.status(200).json(response);
      } else {
        return res.status(200).json({ error: 'No User found' });
      }
    } catch (error) {
      console.log('Passou aqui.');

      console.log(error);

      return res.status(400).json(error);
    }
  },

  async addUser(req, res) {
    const { name, email, password } = req.body;
    if (!name) {
      return res.status(400).json({ error: 'The name cannot be empty.' });
    }
    if (!email) {
      return res.status(400).json({ error: 'The email cannot be empty.' });
    }
    if (!password) {
      return res.status(400).json({ error: 'The password cannot be empty.' });
    }
    try {
      const createdUser = await User.create({ name, email, password });
      return res.status(201).json(createdUser);

    } catch (error) {
      return res.status(400).json(error);
    }
  },

  async updateUser(req, res) {
    const alteredUser = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      return res.status(400).json({ error: 'Please input a valid numeric id value' });
    }
    try {
      const updatedUser = await User.findOne({
        where: { id: Number(id) }
      });

      if (updatedUser) {
        await User.update(alteredUser, { where: { id: Number(id) } });

        return res.status(200).json({ error: 'User updated sucessfully' });
      }
    return res.status(204).json({ error: 'No Content' });
    } catch (error) {
      throw error;
    }
  },

  async getUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      return res.status(400).json({ error: 'Please input a valid numeric id value' })
    }

    try {
      const user = await User.findOne({
        where: { id: Number(id) }
      });

      return res.status(200).json(user);
    } catch (error) {
      throw error;
    }
  },

  async deleteUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      return res.status(400).json({ error: 'Please input a valid numeric id value' })
    }

    try {
      const userToDelete = await User.findOne({
        where: { id: Number(id) }
      });

      if (userToDelete) {
        const deletedUser = await User.destroy({
          where: { id: Number(id) }
        });
        return res.status(204).json(deletedUser);
      }
    return res.status(400).json({ error: 'User not found' });
    } catch (error) {
      throw error;
    }
  }
}

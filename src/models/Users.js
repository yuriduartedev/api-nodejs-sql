const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasMany(models.Order, { foreignKey: 'user_id', as: 'orders' });
  }
}

module.exports = User;

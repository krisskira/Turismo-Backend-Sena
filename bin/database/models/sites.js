const Sequelize = require('sequelize');
module.exports = sequelize => {
    return sequelize.define('sites', {
    // attributes
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: true
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false
    },
    web: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    local_phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    mobile_hone: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    timestamps: false,
  });
}




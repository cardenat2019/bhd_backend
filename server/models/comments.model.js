const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Model = Sequelize.Model;

class Comments extends Model {}
Comments.init({
  id: {
      type: Sequelize.SMALLINT, 
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
  name:  {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content:  {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  website: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  
}, {
  sequelize,
  modelName: 'comments',
  timestamps: false,
  freezeTableName: true,
  underscored: true
});

module.exports = Comments;
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  person.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    freezeTableName: true,
    modelName: 'person',
  });
  return person;
};